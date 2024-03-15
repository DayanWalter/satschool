"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  const [cartcount, setCartcount] = useState(2);

  return (
    <div className='flex  h-24 items-end justify-between border-b px-5 pb-5 xl:px-20'>
      <div className='hidden text-4xl font-bold sm:block'>SatSch</div>
      <div className='flex sm:gap-10 xl:gap-20'>
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

      <div>
        {" "}
        <Button asChild variant='link'>
          <Link href='/cart'>
            <div className='relative'>
              <Icon path={mdiCartOutline} size={1} />
              <div className=' absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white'>
                {cartcount}
              </div>
            </div>
          </Link>
        </Button>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
