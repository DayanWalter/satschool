"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CheckoutButton from "./CheckoutButton";

export default function CartTotalCard({ subtotal }: { subtotal: number }) {
  const calculateShipping = () => {
    if (subtotal < 200 && subtotal > 0) {
      return 20;
    } else {
      return 0;
    }
  };
  const shippingFee = calculateShipping();
  const totalAmount = subtotal + shippingFee;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cart Total</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-5 flex justify-between">
          <p>Subtotal:</p>
          <p>${subtotal}</p>
        </div>

        <Separator />
        <div className="my-5 flex justify-between">
          <p>Shipping:</p>
          <p>{shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}</p>
        </div>
        <Separator />
        <div className="mt-5 flex justify-between">
          <p>Total:</p>
          <p>${totalAmount}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <CheckoutButton />
      </CardFooter>
    </Card>
  );
}
