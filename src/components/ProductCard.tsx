import React from "react";
import Rating from "./Rating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='flex flex-col justify-between border h-80 '>
      <div className='border h-64 bg-gray-200'>
        <p>{product.picture}</p>
      </div>
      <div className='border'>
        <h2 className='font-semibold '>{product.name}</h2>
        <div className='flex gap-2 items-center'>
          <p className='text-red-600'>${product.price}</p>
          <Rating rating={product.rating} />
          <p className='text-gray-400 text-sm'>({product.numberOfRatings})</p>
        </div>
      </div>
    </div>
  );
}
