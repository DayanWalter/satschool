import React from "react";
import StatisticsCard from "./StatisticsCard";

export default function AboutStatistics() {
  const statistics = [
    {
      id: 1,
      icon: "./emoticon-happy-outline.svg",
      number: 5,
      description: "Happy Customers",
    },
    {
      id: 2,
      icon: "./currency-btc.svg",
      number: 6,
      description: "Sold Courses",
    },
    {
      id: 3,
      icon: "./lightbulb-on-outline.svg",
      number: 21,
      description: "Ideas every day",
    },
  ];
  return (
    <div className="flex flex-col gap-10 md:flex-row lg:gap-20">
      {statistics.map((statistic: Statistic) => (
        <StatisticsCard key={statistic.id} statistic={statistic} />
      ))}
    </div>
  );
}
