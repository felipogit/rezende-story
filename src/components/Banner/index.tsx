"use client";

import Image from "next/image";



export const Banner = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Image
      width={1000}
      height={600}
       className="w-full h- " src="/banner01.png" alt="" />
    </div>
  );
};
