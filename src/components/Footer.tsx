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
      <div className="flex min-h-96 flex-col border-t  lg:flex-row lg:justify-between lg:px-16 lg:py-12">
        {/* Accordion */}
        <Accordion className="lg:hidden" type="single" collapsible>
          {/* Subscribe */}
          <AccordionItem value="subscribe">
            <AccordionTrigger>
              <p className="px-2">Subscribe</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-4">
                <p className="mb-2 text-xs">Get 10% off your first order</p>
                <Input
                  className="max-w-56"
                  type="text"
                  name="accordionEmailfield"
                  placeholder="Enter your email"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Support */}
          <AccordionItem value="support">
            <AccordionTrigger>
              <p className="px-2">Support</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-4">
                <p className=" text-xs">25 Avenida Norte,</p>
                <p className=" text-xs">San Salvador,</p>
                <p className="mb-2 text-xs">El Salvador</p>
                <p className="mb-2 text-xs">sat.nak@satsch.com</p>
                <p className="mb-2 text-xs">(+503) 2222-3333</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Account */}
          <AccordionItem value="account">
            <AccordionTrigger>
              <p className="px-2">Account</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col px-4 ">
                <Link
                  className="mb-2  underline-offset-4 hover:underline"
                  href="/cart"
                >
                  Cart
                </Link>
                <Link className="underline-offset-4 hover:underline" href="/">
                  Shop
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Quick Link */}
          <AccordionItem value="quick-link">
            <AccordionTrigger>
              <p className="px-2">Quick Link</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col px-4">
                <Link
                  className="mb-2  underline-offset-4 hover:underline"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>

                <Link
                  className="mb-2  underline-offset-4 hover:underline"
                  href="/terms"
                >
                  Terms Of Use
                </Link>

                <Link
                  className="mb-2  underline-offset-4 hover:underline"
                  href="/faq"
                >
                  FAQ
                </Link>

                <Link
                  className="mb-2  underline-offset-4 hover:underline"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Donate Developer */}
          <AccordionItem value="donate-developer">
            <AccordionTrigger>
              <div className="flex gap-2 px-2">
                <p>Support the Developer</p>
                <Icon color="red" path={mdiHeartOutline} size={1} />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-4 ">
                <p className="mb-2 text-xs">
                  Send the developer some sats if you want
                </p>
                <div className="mb-6 flex w-72">
                  <div className="flex w-1/2 justify-center">
                    <div className="relative h-24 w-24 ">
                      <Image
                        fill
                        sizes="100px"
                        priority
                        src="/lnadress.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="flex w-1/2 flex-col items-center justify-center">
                    <div className=" relative h-12 w-24">
                      <Link
                        className=" absolute h-full w-full"
                        href="https://google.com/"
                        target="_blank"
                      >
                        <Image fill src="/google.svg" alt="" />
                      </Link>
                    </div>
                    <div className="relative h-12 w-24">
                      <Link
                        className=" absolute h-full w-full"
                        href="https://apple.com/"
                        target="_blank"
                      >
                        <Image fill src="/apple.svg" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link href="https://facebook.com/" target="_blank">
                    <Icon path={mdiFacebook} size={1} />
                  </Link>
                  <Link href="https://x.com/" target="_blank">
                    <Icon path={mdiTwitter} size={1} />
                  </Link>
                  <Link href="https://instagram.com/" target="_blank">
                    <Icon path={mdiInstagram} size={1} />
                  </Link>
                  <Link href="https://linkedin.com/" target="_blank">
                    <Icon path={mdiLinkedin} size={1} />
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Subscribe */}
        <div className="hidden max-w-56 p-5 lg:block">
          <h1 className="mb-2 text-xl font-semibold">SatSch</h1>
          <h2 className="mb-2 text-lg">Subscribe</h2>
          <p className="mb-2 text-xs">Get 10% off your first order</p>
          <Input type="text" name="emailfield" placeholder="Enter your email" />
        </div>

        {/* Support */}
        <div className="hidden p-5 lg:block">
          <h1 className="mb-2 text-xl font-semibold">Support</h1>
          <p className=" text-xs">25 Avenida Norte,</p>
          <p className=" text-xs">San Salvador,</p>
          <p className="mb-2 text-xs">El Salvador</p>
          <p className="mb-2 text-xs">sat.nak@satsch.com</p>
          <p className="mb-2 text-xs">(+503) 2222-3333</p>
        </div>

        {/* Account */}
        <div className="hidden max-w-sm p-5 lg:block">
          <h1 className="mb-2 text-xl font-semibold">Account</h1>
          <div className="flex flex-col ">
            <Link
              className="mb-2  underline-offset-4 hover:underline"
              href="/cart"
            >
              Cart
            </Link>
            <Link className=" underline-offset-4 hover:underline" href="/">
              Shop
            </Link>
          </div>
        </div>

        {/* Quick Link */}
        <div className="hidden max-w-sm p-5 lg:block">
          <h1 className="mb-2 text-xl font-semibold">Quick Link</h1>
          <div className="flex flex-col">
            <Link
              className="mb-2  underline-offset-4 hover:underline"
              href="/privacy"
            >
              Privacy Policy
            </Link>

            <Link
              className="mb-2  underline-offset-4 hover:underline"
              href="/terms"
            >
              Terms Of Use
            </Link>

            <Link
              className="mb-2  underline-offset-4 hover:underline"
              href="/faq"
            >
              FAQ
            </Link>

            <Link
              className="mb-2  underline-offset-4 hover:underline"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Support Developer */}
        <div className="hidden w-72 p-5 lg:block">
          <div className="mb-2 flex gap-3">
            <h1 className="text-xl font-semibold">Support the Dev</h1>
            <Icon color="red" path={mdiHeartOutline} size={1} />
          </div>
          <p className="mb-2 text-xs">
            Send the developer some sats if you want
          </p>
          <div className="mb-6 flex">
            <div className="flex w-1/2 justify-center">
              <div className="relative h-24 w-24 ">
                <Image fill sizes="100px" priority src="/lnadress.jpg" alt="" />
              </div>
            </div>

            <div className="flex w-1/2 flex-col items-center justify-center">
              <div className=" relative h-12 w-24">
                <Link
                  className=" absolute h-full w-full"
                  href="https://google.com/"
                  target="_blank"
                >
                  <Image fill src="/google.svg" alt="" />
                </Link>
              </div>
              <div className="relative h-12 w-24">
                <Link
                  className=" absolute h-full w-full"
                  href="https://apple.com/"
                  target="_blank"
                >
                  <Image fill src="/apple.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <Link href="https://facebook.com/" target="_blank">
              <Icon path={mdiFacebook} size={1} />
            </Link>
            <Link href="https://x.com/" target="_blank">
              <Icon path={mdiTwitter} size={1} />
            </Link>
            <Link href="https://instagram.com/" target="_blank">
              <Icon path={mdiInstagram} size={1} />
            </Link>
            <Link href="https://linkedin.com/" target="_blank">
              <Icon path={mdiLinkedin} size={1} />
            </Link>
          </div>
        </div>
      </div>
      {/* Licence */}
      <div className="flex  h-16 items-center justify-center text-sm lg:border-t ">
        <p className="mr-1 hidden sm:block">2024</p>
        <Link href="https://dayanwalter.com/" target="_blank">
          <p className="mr-1 hidden sm:block">Dayan Walter.</p>
        </Link>
        <p>This work is licensed under the MIT License.</p>
      </div>
    </>
  );
}
