"use client";

// React
import React from "react";

// Shadcn
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Components
import CheckoutButton from "./CheckoutButton";

export default function CartTotalCard({ subtotal }: { subtotal: number }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cart Total</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-5 flex justify-between">
          <p>Subtotal:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>

        <Separator />
        <div className="my-5 flex justify-between">
          <p>Shipping:</p>
          <p>Free :)</p>
        </div>
        <Separator />
        <div className="mt-5 flex justify-between">
          <p>Total:</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <CheckoutButton />
      </CardFooter>
    </Card>
  );
}
