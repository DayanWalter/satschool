"use client";

// React
import React from "react";

// Components
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";

export default function CheckoutButton() {
  // const url = process.env.VERCEL_URL;

  const { cart } = useCart();

  const checkout = async () => {
    try {
      const response = await fetch(`${process.env.VERCEL_URL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: cart }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.url) {
        window.location.href = responseData.url;
      }
    } catch (error) {
      console.error("An error occurred during checkout:", error);
    }
  };

  return (
    <>
      {cart.length ? (
        <Button onClick={checkout}>Proceed to checkout</Button>
      ) : (
        <Button disabled={true}>Your cart is empty :(</Button>
      )}
    </>
  );
}
