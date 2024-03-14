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
      <div className='min-h-96 dark:text-white dark:bg-black flex flex-col'>
        <div className='border p-5'>
          <h1 className='text-xl font-semibold mb-2'>SatSch</h1>
          <h2 className='text-lg mb-2'>Subscribe</h2>
          <p className='text-xs mb-2'>Get 10% off your first order</p>
          <Input type='text' placeholder='Enter your email' />
        </div>
        <div className='border p-5'>
          <h1 className='text-xl font-semibold mb-2'>Support</h1>
          <p className='text-xs mb-2'>
            25 Avenida Norte, San Salvador, El Salvador
          </p>
          <p className='text-xs mb-2'>juan.perez@example.com</p>
          <p className='text-xs mb-2'>(+503) 2222-3333</p>
        </div>
        <div className='border p-5'>
          <h1 className='text-xl font-semibold mb-2'>Account</h1>
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
        <div className='border p-5'>
          <h1 className='text-xl font-semibold mb-2'>Quick Link</h1>
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
        <div className='border p-5'>
          <div>
            <h1 className='text-xl font-semibold mb-2'>Donate Developer</h1>
            <Icon path={mdiHeartOutline} size={1} />
          </div>
          <p>Send the developer some sats if you want</p>
          <div>QR CONTAINER</div>
          <div>
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
      <div className='h-16 dark:bg-black dark:text-white border-t border-primary flex items-center justify-center'>
        <p>COPY</p>
      </div>
    </>
  );
}
