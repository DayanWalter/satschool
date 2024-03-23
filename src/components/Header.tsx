"use client";

// React
import React from "react";

// Next
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// Icons
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { ModeToggle } from "./ModeToggle";

// Context
import { useCart } from "./CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <div className="flex  h-24 items-end justify-between border-b px-5 pb-5 xl:px-20">
      <div className="hidden text-4xl font-bold sm:block">
        <Link href="/">SatSch</Link>
      </div>
      <div className="flex sm:gap-10 xl:gap-20">
        <Button asChild variant="link">
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/contact">Contact</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/about">About</Link>
        </Button>
      </div>

      <div className="flex sm:gap-5">
        {" "}
        <Button asChild variant="link">
          <Link href="/cart">
            <div className="relative">
              <Icon path={mdiCartOutline} size={1} />
              <div className=" absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
                {cart.length}
              </div>
            </div>
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
