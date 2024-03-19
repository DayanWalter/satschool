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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";

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
  const calculateTotalAmount = () => {
    const totalAmount = cart.reduce(
      (total, product) => total + product.price * product.quantityInCart,
      0,
    );
    return totalAmount.toFixed(2);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full flex-col">
        {/* Navigation Breadcrumb */}
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
        <Table>
          <TableCaption>A list of your items in your cart</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3 ">
                    <div className=" rounded border bg-white p-1">
                      <div className="relative h-12 w-12">
                        <Image
                          src={product.image}
                          alt="product image"
                          sizes="100%"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="truncate">{product.title}</p>
                  </div>
                </TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex w-16 items-center justify-between rounded border px-3 ">
                    <p>{product.quantityInCart}</p>
                    <div className="flex flex-col">
                      <button onClick={() => handleIncrement(product.id)}>
                        +
                      </button>
                      <button onClick={() => handleDecrement(product.id)}>
                        -
                      </button>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  ${calculateSubTotal(product)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                ${calculateTotalAmount()}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      Cart Page
    </main>
  );
}
