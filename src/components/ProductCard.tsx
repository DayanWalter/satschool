import React from "react";
import Rating from "./Rating";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='border flex flex-col justify-between  h-80 '>
      <div className=' h-64 bg-gray-100 rounded'>
        <p>{product.image}</p>
      </div>
      <div className=''>
        <h2 className='font-semibold '>{product.title}</h2>
        <div className='flex gap-2 items-center'>
          <p className='text-red-600'>${product.price}</p>
          <Rating rating={product.rating.rate} />
          <p className='text-gray-400 text-sm'>({product.rating.count})</p>
        </div>
      </div>
    </div>
  );
}
