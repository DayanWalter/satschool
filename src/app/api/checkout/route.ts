// Next
import { NextResponse } from "next/server";

const url = process.env.NEXT_PUBLIC_CHECKOUT_URL;
// Import the Stripe module and initialize it with the secret Stripe key
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// Fetch active products from Stripe
const getActiveProducts = async () => {
  // Fetch all products from Stripe
  const checkProducts = await stripe.products.list();
  // Filter the available products to get only active ones
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true,
  );
  // Return the available products
  return availableProducts;
};

// POST endpoint that receives products and syncs them with Stripe
export const POST = async (request: any) => {
  // Get the products from the request as JSON
  const { products } = await request.json();

  // Define the received data as type Product[]
  const data: Product[] = products;

  // Fetch active products from Stripe
  let activeProducts = await getActiveProducts();
  try {
    // Iterate through the received products
    for (const product of data) {
      // Find the corresponding product, if it exists
      const stripeProduct = activeProducts.find(
        (prod: any) =>
          prod?.name?.toLowerCase() === product?.title?.toLowerCase(),
      );
      // If the product doesn't exist, create it
      if (stripeProduct === undefined) {
        const prod = await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: Math.round(product.price * 100),
            currency: "usd",
          },
        });
      }
    }
  } catch (error) {
    // Handle error if creating a product fails
    console.error("Error in creating in new product", error);
  }

  // Fetch active products from Stripe again
  activeProducts = await getActiveProducts();

  // Initialize an array for the Stripe items
  let stripeItems: any = [];

  // Iterate through the received products
  for (const product of data) {
    // Find the corresponding product in Stripe
    const stripeProduct = activeProducts.find(
      (prod: any) =>
        prod?.name?.toLowerCase() === product?.title?.toLowerCase(),
    );
    // If the product is found, add information for the order
    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantityInCart,
      });
    }
  }

  // Create a Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    success_url: `${url}success`,
    cancel_url: `${url}cancel`,
  });
  // Return the URL of the checkout session as JSON
  return NextResponse.json({ url: session.url });
};
