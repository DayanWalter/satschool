import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
      }}
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[400px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
