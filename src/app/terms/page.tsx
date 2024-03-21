import React from "react";
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Terms() {
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
              <BreadcrumbPage>Terms Of Use</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mx-auto max-w-3xl rounded  p-8 shadow">
          <h1 className="mb-4 text-3xl font-bold">Terms of Use</h1>
          <p className="mb-4">
            Please read these terms of use carefully before using our website.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Agreement</h2>
          <p className="mb-4">
            By using our website, you agree to these terms of use without
            reservation.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Intellectual Property</h2>
          <p className="mb-4">
            The content of our website is protected by intellectual property
            rights and may not be used without our express permission.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Limitation of Liability</h2>
          <p className="mb-4">
            We do not accept liability for damages arising from the use of our
            website.
          </p>
          <h2 className="mb-2 text-2xl font-bold">
            Changes to the Terms of Use
          </h2>
          <p className="mb-4">
            We reserve the right to change these terms of use at any time.
            Please check them regularly for updates.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these terms of use, you can contact
            us at example@example.com.
          </p>
        </div>
      </main>
    </>
  );
}
