"use client";

// React
import React from "react";
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

// Components
import AboutHeader from "./AboutHeader";
import AboutStatistics from "./AboutStatistics";

export default function About() {
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
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex min-h-full flex-col items-center justify-between p-5 lg:p-24">
        {/* <div className="flex w-full flex-col justify-around space-y-5 md:items-center lg:flex-row lg:-space-y-0"> */}
        <div className="flex flex-col items-center gap-10 lg:gap-32">
          <AboutHeader />
          <AboutStatistics />
        </div>
        {/* </div> */}
      </main>
    </>
  );
}
