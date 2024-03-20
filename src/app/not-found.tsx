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
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
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
              <BreadcrumbPage>404</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24">
        <div className="flex flex-col items-center">
          <h1 className="mb-5 text-4xl font-semibold">404 | Not Found</h1>
          <p className="mb-5">Your requested page was not found</p>
          <Button asChild>
            <Link href="/">Back to home page</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
