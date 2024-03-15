// React
import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Shadcn
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icons
import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";

export default function Footer() {
  return (
    <>
      <div className='flex border-t min-h-96 flex-col dark:bg-black dark:text-white lg:flex-row lg:justify-between lg:px-16 lg:py-12'>
        {/* Accordion */}
        <Accordion className='lg:hidden' type='single' collapsible>
          {/* Subscribe */}
          <AccordionItem value='subscribe'>
            <AccordionTrigger>Subscribe</AccordionTrigger>
            <AccordionContent>
              <p className='mb-2 text-xs'>Get 10% off your first order</p>
              <Input
                className='max-w-56'
                type='text'
                placeholder='Enter your email'
              />
            </AccordionContent>
          </AccordionItem>

          {/* Support */}
          <AccordionItem value='support'>
            <AccordionTrigger>Support</AccordionTrigger>
            <AccordionContent>
              <p className=' text-xs'>25 Avenida Norte,</p>
              <p className=' text-xs'>San Salvador,</p>
              <p className='mb-2 text-xs'>El Salvador</p>
              <p className='mb-2 text-xs'>sat.nak@satsch.com</p>
              <p className='mb-2 text-xs'>(+503) 2222-3333</p>
            </AccordionContent>
          </AccordionItem>

          {/* Account */}
          <AccordionItem value='account'>
            <AccordionTrigger>Account</AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col '>
                <Link
                  className='mb-2  underline-offset-4 hover:underline'
                  href='/cart'
                >
                  Cart
                </Link>
                <Link className=' underline-offset-4 hover:underline' href='/'>
                  Shop
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Quick Link */}
          <AccordionItem value='quick-link'>
            <AccordionTrigger>Quick Link</AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col'>
                <Link
                  className='mb-2  underline-offset-4 hover:underline'
                  href='/privacy'
                >
                  Privacy Policy
                </Link>

                <Link
                  className='mb-2  underline-offset-4 hover:underline'
                  href='/terms'
                >
                  Terms Of Use
                </Link>

                <Link
                  className='mb-2  underline-offset-4 hover:underline'
                  href='/faq'
                >
                  FAQ
                </Link>

                <Link
                  className='mb-2  underline-offset-4 hover:underline'
                  href='/contact'
                >
                  Contact
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Donate Developer */}
          <AccordionItem value='donate-developer'>
            <AccordionTrigger>
              <div className='flex gap-2'>
                <p>Donate Developer</p>
                <Icon color='red' path={mdiHeartOutline} size={1} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className='mb-2 text-xs'>
                Send the developer some sats if you want
              </p>
              <div className='w-72 mb-6 flex'>
                <div className='w-1/2 flex justify-center'>
                  <div className='w-24 h-24 relative '>
                    <Image
                      fill
                      sizes='100px'
                      priority
                      src='/lnadress.jpg'
                      alt=''
                    />
                  </div>
                </div>

                <div className='flex w-1/2 flex-col items-center justify-center'>
                  <div className=' relative w-24 h-12'>
                    <Link
                      className=' absolute w-full h-full'
                      href='https://google.com/'
                      target='_blank'
                    >
                      <Image fill src='/google.svg' alt='' />
                    </Link>
                  </div>
                  <div className='relative w-24 h-12'>
                    <Link
                      className=' absolute w-full h-full'
                      href='https://apple.com/'
                      target='_blank'
                    >
                      <Image fill src='/apple.svg' alt='' />
                    </Link>
                  </div>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Subscribe */}
        <div className='hidden lg:block max-w-56 p-5'>
          <h1 className='mb-2 text-xl font-semibold'>SatSch</h1>
          <h2 className='mb-2 text-lg'>Subscribe</h2>
          <p className='mb-2 text-xs'>Get 10% off your first order</p>
          <Input type='text' placeholder='Enter your email' />
        </div>
        {/* Support */}
        <div className='hidden lg:block p-5'>
          <h1 className='mb-2 text-xl font-semibold'>Support</h1>
          <p className=' text-xs'>25 Avenida Norte,</p>
          <p className=' text-xs'>San Salvador,</p>
          <p className='mb-2 text-xs'>El Salvador</p>
          <p className='mb-2 text-xs'>sat.nak@satsch.com</p>
          <p className='mb-2 text-xs'>(+503) 2222-3333</p>
        </div>
        {/* Account */}
        <div className='hidden lg:block max-w-sm p-5'>
          <h1 className='mb-2 text-xl font-semibold'>Account</h1>
          <div className='flex flex-col '>
            <Link
              className='mb-2  underline-offset-4 hover:underline'
              href='/cart'
            >
              Cart
            </Link>
            <Link className=' underline-offset-4 hover:underline' href='/'>
              Shop
            </Link>
          </div>
        </div>
        {/* Quick Link */}
        <div className='hidden lg:block max-w-sm p-5'>
          <h1 className='mb-2 text-xl font-semibold'>Quick Link</h1>
          <div className='flex flex-col'>
            <Link
              className='mb-2  underline-offset-4 hover:underline'
              href='/privacy'
            >
              Privacy Policy
            </Link>

            <Link
              className='mb-2  underline-offset-4 hover:underline'
              href='/terms'
            >
              Terms Of Use
            </Link>

            <Link
              className='mb-2  underline-offset-4 hover:underline'
              href='/faq'
            >
              FAQ
            </Link>

            <Link
              className='mb-2  underline-offset-4 hover:underline'
              href='/contact'
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Donate Developer */}
        <div className='hidden lg:block w-72 p-5'>
          <div className='mb-2 flex gap-3'>
            <h1 className='text-xl font-semibold'>Donate Developer</h1>
            <Icon color='red' path={mdiHeartOutline} size={1} />
          </div>
          <p className='mb-2 text-xs'>
            Send the developer some sats if you want
          </p>
          <div className='mb-6 flex'>
            <div className='w-1/2 flex justify-center'>
              <div className='w-24 h-24 relative '>
                <Image fill sizes='100px' priority src='/lnadress.jpg' alt='' />
              </div>
            </div>

            <div className='flex w-1/2 flex-col items-center justify-center'>
              <div className=' relative w-24 h-12'>
                <Link
                  className=' absolute w-full h-full'
                  href='https://google.com/'
                  target='_blank'
                >
                  <Image fill src='/google.svg' alt='' />
                </Link>
              </div>
              <div className='relative w-24 h-12'>
                <Link
                  className=' absolute w-full h-full'
                  href='https://apple.com/'
                  target='_blank'
                >
                  <Image fill src='/apple.svg' alt='' />
                </Link>
              </div>
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
      {/* Licence */}
      <div className=' text-gray-500  text-sm  flex h-16 items-center justify-center lg:border-t border-primary dark:bg-black dark:text-white'>
        <p className='mr-1 hidden sm:block'>2024</p>
        <Link href='https://dayanwalter.com/' target='_blank'>
          <p className='mr-1 hidden sm:block'>Dayan Walter.</p>
        </Link>
        <p>This work is licensed under the MIT License.</p>
      </div>
    </>
  );
}
