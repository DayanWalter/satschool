import React from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";
import ProductCard from "./ProductCard";

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: "Item1",
      picture: "image_url",
      price: 12.99,
      rating: 1.5,
      numberOfRatings: 20,
    },
    {
      id: 2,
      name: "Item2",
      picture: "image_url",
      price: 1.99,
      rating: 3,
      numberOfRatings: 20,
    },
    {
      id: 3,
      name: "Item3",
      picture: "image_url",
      price: 10.99,
      rating: 4,
      numberOfRatings: 20,
    },
    {
      id: 4,
      name: "Item4",
      picture: "image_url",
      price: 15.99,
      rating: 4,
      numberOfRatings: 20,
    },
    {
      id: 5,
      name: "Item5",
      picture: "image_url",
      price: 17.99,
      rating: 4,
      numberOfRatings: 20,
    },
  ];
  return (
    <div className='w-full flex flex-col'>
      {/* Header section */}
      <div className='border mb-14'>
        <div className='flex items-center gap-5 mb-5'>
          <div className='bg-primary rounded h-10 w-5'></div>
          <p className='text-primary font-semibold '>Our Products</p>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-semibold'>Explore our Products</h1>
          <div className='flex gap-2'>
            <div className=' flex justify-center items-center rounded-full bg-gray-200 w-12 h-12'>
              <Icon path={mdiArrowLeft} size={1.5} />
            </div>
            <div className='flex justify-center items-center rounded-full bg-gray-200 w-12 h-12'>
              <Icon path={mdiArrowRight} size={1.5} />
            </div>
          </div>
        </div>
      </div>
      {/* Product section */}
      <div>
        <ul className='border grid grid-cols-4'>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
