"use client";
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

export default function Success() {
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
              <BreadcrumbPage>Success</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24">
        <div>
          <h1 className="mb-5 text-4xl font-semibold">SUCCESS!</h1>
          <p>Your items will be shipped immediately!</p>
          <p>
            Thank you for actively participating in the evolution of mankind :)
          </p>
        </div>
      </main>
    </>
  );
}
