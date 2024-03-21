import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function StatisticsCard({
  statistic,
}: {
  statistic: Statistic;
}) {
  return (
    <>
      <Card className="size-48 hover:bg-secondary">
        <CardContent>
          <div className="flex flex-col items-center p-5">
            <div className="relative mb-7 size-12 rounded-full border-4 bg-primary">
              <Image
                src={statistic.icon}
                alt="statistic image"
                sizes="100%"
                fill
              />
            </div>
            <h1 className="text-3xl font-bold">{statistic.number}k</h1>
            <p className="text-xs">{statistic.description}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
