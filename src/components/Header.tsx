import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

export default function Header() {
  return (
    <div className='h-24  flex justify-between items-end pb-5 px-5 border-b'>
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
            <Icon path={mdiCartOutline} size={1} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
