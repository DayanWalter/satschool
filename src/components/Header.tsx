import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className='h-24 bg-gray-400 flex'>
      <div className='hidden sm:block'>Logo</div>
      <div>
        <Button variant='link'>Home</Button>
        <Button variant='link'>Contact</Button>
        <Button variant='link'>About</Button>
      </div>
      <div>Searchbar</div>
      <div>ShoppingCart</div>
    </div>
  );
}
