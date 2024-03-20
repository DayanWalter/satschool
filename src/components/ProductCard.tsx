import React, { useState } from "react";
import Rating from "./Rating";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, cart } = useCart();
  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className=" flex h-80 flex-col justify-between ">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" relative flex h-64 items-center justify-center rounded border bg-white "
      >
        <div className="relative h-5/6 w-1/2 ">
          <Image
            src={product.image}
            alt="product image"
            sizes="100%"
            fill
            className="object-contain"
          />
        </div>
        {isHovered && (
          <button
            onClick={() => {
              addToCart(product);
            }}
            className={`absolute bottom-0 w-full rounded-b  px-4 py-2   transition duration-300  ${
              isProductInCart
                ? "cursor-not-allowed bg-gray-400 text-gray-600"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            } `}
          >
            {isProductInCart ? "Added To Cart" : "Add To Cart"}
          </button>
        )}
      </div>

      <div className="">
        <h2 className="font-semibold ">{product.title}</h2>
        <div className="flex items-center gap-2">
          <p className="text-red-600">${product.price.toFixed(2)}</p>
          <Rating rating={product.rating.rate} />
          <p className="text-sm text-gray-400">({product.rating.count})</p>
        </div>
      </div>
    </div>
  );
}
