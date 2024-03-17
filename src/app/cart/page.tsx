"use client";
import React from "react";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useCart } from "@/components/CartContext";

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full flex-col">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Cart Content */}
        <div>
          {/* Cart Header */}
          <div className="flex justify-between border">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {/* Cart Item */}

          {cart.map((product) => (
            <div key={product.id} className="flex justify-between border">
              {/* Product */}
              <div className="flex gap-1">
                <p>Icon</p>
                <p>{product.title}</p>
              </div>
              {/* Price */}
              <p>${product.price.toFixed(2)}</p>
              {/* Quantity */}
              <div className="flex items-center rounded border">
                <p>{product.quantityInCart}</p>
                <div className="flex flex-col">
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
              {/* Subtotal */}
              <p>
                ${product.price.toFixed(2)} x {product.quantityInCart}
              </p>
            </div>
          ))}
        </div>
      </div>
      Cart Page
    </main>
  );
}
