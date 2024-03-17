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
    <div className="flex w-full flex-col">
      {/* Header section */}
      <div className="mb-14 ">
        <div className="mb-5 flex items-center gap-5">
          <div className="h-10 w-5 rounded bg-primary"></div>
          <p className="font-semibold text-primary ">Our Products</p>
        </div>
        <div className=" flex justify-between ">
          <h1 className="text-4xl font-semibold">Explore our Products</h1>
          <div className="flex gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
              <Icon path={mdiArrowLeft} size={1.5} />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
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
          <div className="grid grid-cols-1 gap-8   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
