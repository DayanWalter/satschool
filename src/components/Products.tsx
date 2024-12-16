"use client";

// React
import React from "react";

// Components
import ProductCard from "./ProductCard";
import { PRODUCTS } from "./constants";
// Fetch
// import useFetchProducts from "@/hooks/useFetchProducts";

export default function Products() {
  // const { data: products, error, loading } = useFetchProducts();

  return (
    <div className="flex w-full flex-col">
      {/* Header section */}
      <div className="mb-14 ">
        <div className="mb-5 flex items-center gap-5">
          <div className="h-10 w-5 rounded bg-primary"></div>
          <p className="font-semibold text-primary ">Our Products</p>
        </div>
        <div className=" flex flex-col justify-between md:flex-row ">
          <h1 className=" text-4xl font-semibold ">Explore our Products</h1>
        </div>
      </div>
      {/* Product section */}
      {/* {loading && <div>Loading...</div>} */}
      {/* {error && <div>Error</div>} */}
      {PRODUCTS && (
        <div>
          <div className="grid grid-cols-1 gap-8   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCTS.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
