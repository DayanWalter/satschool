import React from "react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div>
        <p>{product.picture}</p>
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.rating}</p>
        <p>{product.numberOfRatings}</p>
      </div>
    </>
  );
}
