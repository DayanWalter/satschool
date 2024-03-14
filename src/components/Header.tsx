"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

export default function Header() {
  const [cartcount, setCartcount] = useState(2);

  return (
    <div className='h-24  flex justify-between items-end pb-5 px-5 xl:px-20 border-b'>
      <div className='hidden sm:block text-4xl font-bold'>SatSch</div>
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
              <div className=' -top-2 -right-2 flex items-center justify-center rounded-full h-5 w-5 absolute bg-destructive text-destructive-foreground'>
                {cartcount}
              </div>
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
