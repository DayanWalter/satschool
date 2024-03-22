"use client";

// React
import React from "react";

// Components
import ProductCard from "./ProductCard";

// Fetch
// import useFetchProducts from "@/hooks/useFetchProducts";

export default function Products() {
  // const { data: products, error, loading } = useFetchProducts();

  const products: Product[] = [
    {
      id: 1,
      title: "Introduction to Bitcoin",
      price: 21,
      image: "/introduction-to-bitcoin.png",
      quantityInCart: 0,
      rating: {
        rate: 4.8,
        count: 3125,
      },
    },
    {
      id: 2,
      title: "Advanced Bitcoin Techniques",
      price: 299.99,
      image: "/advanced-bitcoin-techniques.png",
      quantityInCart: 0,
      rating: {
        rate: 4.9,
        count: 625,
      },
    },
    {
      id: 3,
      title: "Understanding the Lightning Network",
      price: 249.99,
      image: "/understanding-the-lightning-network.png",
      quantityInCart: 0,
      rating: {
        rate: 4.7,
        count: 125,
      },
    },
    {
      id: 4,
      title: "Bitcoin Mining Basics",
      price: 219.99,
      image: "/bitcoin-mining-basics.png",
      quantityInCart: 0,
      rating: {
        rate: 4.5,
        count: 25,
      },
    },
    {
      id: 5,
      title: "Security in the Bitcoin Ecosystem",
      price: 259.99,
      image: "/security-in-the-bitcoin-ecosystem.png",
      quantityInCart: 0,
      rating: {
        rate: 4.8,
        count: 50,
      },
    },
    {
      id: 6,
      title: "Developing Bitcoin Applications",
      price: 329.99,
      image: "/developing-bitcoin-applications.png",
      quantityInCart: 0,
      rating: {
        rate: 4.6,
        count: 21,
      },
    },
    {
      id: 7,
      title: "Investing in Bitcoin",
      price: 279.99,
      image: "/investing-in-bitcoin.png",
      quantityInCart: 0,
      rating: {
        rate: 4.7,
        count: 2009,
      },
    },
    {
      id: 8,
      title: "Legal Aspects of Bitcoin",
      price: 299.99,
      image: "/legal-aspects-of-bitcoin.png",
      quantityInCart: 0,
      rating: {
        rate: 4.5,
        count: 10,
      },
    },
  ];

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
