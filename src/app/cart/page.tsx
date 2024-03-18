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
import Image from "next/image";

export default function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart();

  const handleIncrement = (productId: number) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId: number) => {
    decrementQuantity(productId);
    const product = cart.find((item: Product) => item.id === productId);
    if (product && product.quantityInCart === 0) {
      removeFromCart(productId);
    }
  };

  const calculateSubTotal = (product: Product) => {
    const subTotal = product.quantityInCart * product.price;
    return subTotal.toFixed(2);
  };

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
          <div className="mb-5 grid grid-cols-4 rounded border px-5 py-2">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {/* Cart Item */}

          {cart.map((product) => (
            <div
              key={product.id}
              className="mb-2 grid grid-cols-4 rounded border p-5"
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 ">
                  <Image
                    src={product.image}
                    alt="product image"
                    sizes="100%"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="truncate">{product.title}</p>
              </div>
              {/* Price */}
              <p>${product.price.toFixed(2)}</p>
              {/* Quantity */}
              <div className="flex w-16 items-center justify-between rounded border px-3 ">
                <p>{product.quantityInCart}</p>
                <div className="flex flex-col">
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                </div>
              </div>
              {/* Subtotal */}
              <p>${calculateSubTotal(product)}</p>
            </div>
          ))}
        </div>
      </div>
      Cart Page
    </main>
  );
}
