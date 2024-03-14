import React from "react";
import { Button } from "./ui/button";
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
      <div className='h-96 text-white bg-black flex'>
        <div>
          <h1>SatSch</h1>
          <h2>Subscribe</h2>
          <p>Get 10% off your first order</p>
          <input type='text' placeholder='Enter your email' />
        </div>
        <div>
          <h1>Support</h1>
          <p>Adress</p>
          <p>Emaildress</p>
          <p>Phone Number</p>
        </div>
        <div>
          <h1>Account</h1>
          <Button asChild variant='link'>
            <Link href='/cart'>Cart</Link>
          </Button>{" "}
          <Button asChild variant='link'>
            <Link href='/'>Shop</Link>
          </Button>{" "}
        </div>
        <div>
          <h1>Quick Link</h1>
          <Button asChild variant='link'>
            <Link href='/privacy'>Privacy Policy</Link>
          </Button>{" "}
          <Button asChild variant='link'>
            <Link href='/terms'>Terms Of Use</Link>
          </Button>{" "}
          <Button asChild variant='link'>
            <Link href='/faq'>FAQ</Link>
          </Button>{" "}
          <Button asChild variant='link'>
            <Link href='/contact'>Contact</Link>
          </Button>{" "}
        </div>
        <div>
          <div>
            <h1>Donate Developer</h1>
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
      <div className='h-16 bg-black text-white border-t border-primary flex items-center justify-center'>
        <p>COPY</p>
      </div>
    </>
  );
}
