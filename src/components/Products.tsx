"use client";
import React from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { mdiArrowRight } from "@mdi/js";
import ProductCard from "./ProductCard";
import useFetchProducts from "@/hooks/useFetchProducts";

export default function Products() {
  const { data: products, error, loading } = useFetchProducts();

  // const products: Product[] = [
  //   {
  //     id: 1,
  //     title: "Item1",
  //     price: 12.99,
  //     image: "image_url",
  //     rating: {
  //       rate: 3.5,
  //       count: 21,
  //     },
  //   },
  // ];

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
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {products && (
        <div>
          <div className='border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
