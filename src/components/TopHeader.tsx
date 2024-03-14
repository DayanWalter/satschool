"use client";
import React, { useEffect, useState } from "react";

export default function TopHeader() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const futureDate = new Date("2024-12-31T23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = futureDate - now;

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const formattedCountdown = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      setCountdown(formattedCountdown);

      if (difference < 0) {
        clearInterval(interval);
        setCountdown("Over");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-12 bg-black text-white flex items-center justify-center'>
      <div className='flex gap-2'>
        <p className='hidden sm:block'>SALE until</p>
        <p className='text-red-600 font-semibold'>{countdown}</p>
        <p>- Free Express Delivery - 50% OFF</p>
      </div>
    </div>
  );
}
