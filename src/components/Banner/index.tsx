"use client";

import Image from "next/image";

export const Banner = () => {
  return (
    <div className="w-full h-auto overflow-hidden max-w-7xl mx-auto">
      <div className="relative w-full aspect-[16/9] max-h-[429px]"> {/* Altura máxima de 500px */}
        <Image
          src="/banner01.png"
          alt="Banner"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};