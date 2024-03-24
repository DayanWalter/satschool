"use client";

// React
import React, { useState } from "react";

// Components
import { useCart } from "@/components/CartContext";
import { Button } from "@/components/ui/button";

export default function CheckoutButton() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const checkout = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/checkout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ products: cart }),
        },
      );

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {cart.length ? (
        <Button onClick={checkout}>
          {loading ? "Please wait..." : "Proceed to checkout"}
        </Button>
      ) : (
        <Button disabled={true}>Your cart is empty :(</Button>
      )}
    </>
  );
}
