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
export default function Privacy() {
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
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mx-auto max-w-3xl rounded  p-8 shadow">
          <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
          <p className="mb-4">
            Here you can find information about how we handle your personal
            data.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Data Collection and Use</h2>
          <p className="mb-4">
            We collect and use your personal data for the following purposes:
          </p>
          <ul className="mb-4 ml-8 list-disc">
            <li>To improve our services</li>
            <li>To customize content and advertising</li>
            <li>To contact you</li>
          </ul>
          <h2 className="mb-2 text-2xl font-bold">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal
            data.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Cookies</h2>
          <p className="mb-4">
            We use cookies to enhance your experience on our website.
          </p>
          <h2 className="mb-2 text-2xl font-bold">
            Changes to this Privacy Policy
          </h2>
          <p className="mb-4">
            This privacy policy is regularly reviewed and updated. Last updated:
            March 2024.
          </p>
          <h2 className="mb-2 text-2xl font-bold">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy, you can contact
            us at example@example.com.
          </p>
        </div>
      </main>
    </>
  );
}
