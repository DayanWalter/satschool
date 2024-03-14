import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <div className='h-24 bg-gray-400 flex'>
      <div className='hidden sm:block'>Logo</div>
      <div>
        <Button asChild variant='link'>
          <Link href='/'>Home</Link>
        </Button>
        <Button asChild variant='link'>
          <Link href='/contact'>Contact</Link>
        </Button>
        <Button asChild variant='link'>
          <Link href='/about'>About</Link>
        </Button>
      </div>

      <div>ShoppingCart</div>
    </div>
  );
}
