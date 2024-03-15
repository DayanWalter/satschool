import React from "react";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";

export default function Footer() {
  return (
    <>
      <div className='flex border-t min-h-96 flex-col dark:bg-black dark:text-white md:flex-row md:justify-between md:p-8'>
        <div className=' p-5'>
          <h1 className='mb-2 text-xl font-semibold'>SatSch</h1>
          <h2 className='mb-2 text-lg'>Subscribe</h2>
          <p className='mb-2 text-xs'>Get 10% off your first order</p>
          <Input type='text' placeholder='Enter your email' />
        </div>
        <div className=' p-5'>
          <h1 className='mb-2 text-xl font-semibold'>Support</h1>
          <p className='mb-2 text-xs'>
            25 Avenida Norte, San Salvador, El Salvador
          </p>
          <p className='mb-2 text-xs'>juan.perez@example.com</p>
          <p className='mb-2 text-xs'>(+503) 2222-3333</p>
        </div>
        <div className=' p-5'>
          <h1 className='mb-2 text-xl font-semibold'>Account</h1>
          <div className='flex flex-col'>
            <Link
              className='mb-2 text-primary underline-offset-4 hover:underline'
              href='/cart'
            >
              Cart
            </Link>
            <Link
              className='text-primary underline-offset-4 hover:underline'
              href='/'
            >
              Shop
            </Link>
          </div>
        </div>
        <div className=' p-5'>
          <h1 className='mb-2 text-xl font-semibold'>Quick Link</h1>
          <div className='flex flex-col'>
            <Link
              className='mb-2 text-primary underline-offset-4 hover:underline'
              href='/privacy'
            >
              Privacy Policy
            </Link>

            <Link
              className='mb-2 text-primary underline-offset-4 hover:underline'
              href='/terms'
            >
              Terms Of Use
            </Link>

            <Link
              className='mb-2 text-primary underline-offset-4 hover:underline'
              href='/faq'
            >
              FAQ
            </Link>

            <Link
              className='mb-2 text-primary underline-offset-4 hover:underline'
              href='/contact'
            >
              Contact
            </Link>
          </div>
        </div>
        <div className=' p-5'>
          <div className='mb-2 flex gap-3'>
            <h1 className='text-xl font-semibold'>Donate Developer</h1>
            <Icon path={mdiHeartOutline} size={1} />
          </div>
          <p className='mb-2 text-xs'>
            Send the developer some sats if you want
          </p>
          <div className='mb-2 flex'>
            <div className='w-1/2'>
              <img className='max-w-24' src='./lnadress.jpg' alt='' />
            </div>
            <div className='flex w-1/2 flex-col items-center justify-center gap-3'>
              <Link href='https://google.com/' target='_blank'>
                <img className='max-h-10 ' src='./google.svg' alt='' />
              </Link>

              <Link href='https://apple.com/' target='_blank'>
                <img className='max-h-10' src='./apple.svg' alt='' />
              </Link>
            </div>
          </div>
          <div className='flex justify-between'>
            <Link href='https://facebook.com/' target='_blank'>
              <Icon path={mdiFacebook} size={1} />
            </Link>
            <Link href='https://x.com/' target='_blank'>
              <Icon path={mdiTwitter} size={1} />
            </Link>
            <Link href='https://instagram.com/' target='_blank'>
              <Icon path={mdiInstagram} size={1} />
            </Link>
            <Link href='https://linkedin.com/' target='_blank'>
              <Icon path={mdiLinkedin} size={1} />
            </Link>
          </div>
        </div>
      </div>
      <div className=' text-gray-500 flex h-16 items-center justify-center border-t border-primary dark:bg-black dark:text-white'>
        <p className='mr-1 hidden sm:block'>2024</p>
        <Link href='https://dayanwalter.com/' target='_blank'>
          <p className='mr-1 hidden sm:block'>Dayan Walter.</p>
        </Link>
        <p>This work is licensed under the MIT License.</p>
      </div>
    </>
  );
}
