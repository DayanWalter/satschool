import React from "react";
// Next
import Link from "next/link";
import { Slash } from "lucide-react";

// Shadcn
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export default function FAQ() {
  return (
    <>
      {/* Navigation Breadcrumb */}
      <div className="p-5 lg:mb-5 lg:pl-24 lg:pt-24 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex min-h-full flex-col items-center justify-between p-5 lg:p-24">
        <Card className="w-full sm:w-5/6 lg:w-[650px]">
          <Accordion type="single" collapsible>
            <AccordionItem value="realshop">
              <AccordionTrigger>
                <p className="px-2">Is SatSch a real shop?</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">No, SatSch is a portfolio project.</div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="paywithbitcoin">
              <AccordionTrigger>
                <p className="px-2">Can I pay with Bitcoin?</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">
                  No. This shop is just connected with Stripe.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="testcheckout">
              <AccordionTrigger>
                <p className="px-2">How can I test the Stripe checkout?</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">
                  <ul>
                    <li>Enter the following:</li>
                    <li>&quot;4242 4242 4242 4242&quot; as credit card.</li>
                    <li>&quot;12/34&quot; as MM/YY.</li>
                    <li>&quot;123&quot; as CVC.</li>
                    <li>
                      Choose an arbitrary email and card owner and click on pay.
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="express">
              <AccordionTrigger>
                <p className="px-2">
                  Free Express Delivery? The products are digital...
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">
                  Well,...yes. So they are VERY express and VERY free :).
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contactdetails">
              <AccordionTrigger>
                <p className="px-2">Are the contact details real?</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">
                  No, these are example contact details.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contactform">
              <AccordionTrigger>
                <p className="px-2">Is the contact form working?</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">
                  No, it is not wired to a service. Look at the{" "}
                  <Link
                    className="mb-2  underline underline-offset-4"
                    href="https://github.com/DayanWalter/satschool/blob/722d0ed17934ff65a7567a121e021524d8c03a6d/src/app/contact/ContactForm.tsx#L60"
                    target="_blank"
                  >
                    repo
                  </Link>
                  , there are comments about how you could do it.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="subscribe">
              <AccordionTrigger>
                <p className="px-2">Can I subscribe to a newsletter?</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="px-4">
                  No your emailadress does not leave this site.
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </main>
    </>
  );
}
