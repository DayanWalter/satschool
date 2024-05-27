// Next
import { NextResponse } from "next/server";

// Type
interface Product {
  title: string;
  price: number;
  quantityInCart: number;
  active?: boolean;
  default_price?: string;
}

interface StripeProduct {
  name: string;
  active: boolean;
  default_price: string;
}

// Environment variables
const url = process.env.NEXT_PUBLIC_CHECKOUT_URL;
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// Return active products from stripe
const getActiveProducts = async () => {
  const { data } = await stripe.products.list();
  return data.filter((product: StripeProduct) => product.active);
};

// Create a new Stripe product
const createStripeProduct = async (product: Product) => {
  return await stripe.products.create({
    name: product.title,
    default_price_data: {
      unit_amount: Math.round(product.price * 100),
      currency: "usd",
    },
  });
};

// Find corresponding Stripe product
const findStripeProduct = (
  activeProducts: StripeProduct[],
  product: Product,
) => {
  return activeProducts.find(
    (prod) => prod?.name?.toLowerCase() === product?.title?.toLowerCase(),
  );
};

// Create Stripe items for the checkout session
const createStripeItems = (
  products: Product[],
  activeProducts: StripeProduct[],
) => {
  return products
    .map((product) => {
      const stripeProduct = findStripeProduct(activeProducts, product);
      return stripeProduct
        ? {
            price: stripeProduct.default_price,
            quantity: product.quantityInCart,
          }
        : null;
    })
    .filter((item) => item !== null);
};

// POST endpoint that receives products and syncs them with Stripe
export const POST = async (request: Request) => {
  try {
    const { products } = await request.json();
    let activeProducts = await getActiveProducts();

    for (const product of products) {
      if (!findStripeProduct(activeProducts, product)) {
        await createStripeProduct(product);
      }
    }

    activeProducts = await getActiveProducts();
    const stripeItems = createStripeItems(products, activeProducts);

    const session = await stripe.checkout.sessions.create({
      line_items: stripeItems,
      mode: "payment",
      success_url: `${url}success`,
      cancel_url: `${url}cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error in processing request", error);
    return NextResponse.json(
      { error: "Error in processing request" },
      { status: 500 },
    );
  }
};
