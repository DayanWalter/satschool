import React from "react";
import Rating from "./Rating";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className=" flex h-80 flex-col justify-between ">
      <div className=" flex h-64 items-center justify-center rounded border bg-white">
        <div className="relative h-5/6 w-1/2 ">
          <Image
            src={product.image}
            alt="product image"
            sizes="100%"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="">
        <h2 className="font-semibold ">{product.title}</h2>
        <div className="flex items-center gap-2">
          <p className="text-red-600">${product.price}</p>
          <Rating rating={product.rating.rate} />
          <p className="text-sm text-gray-400">({product.rating.count})</p>
        </div>
      </div>
    </div>
  );
}
