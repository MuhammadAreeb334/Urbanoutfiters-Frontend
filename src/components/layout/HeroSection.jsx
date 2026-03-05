import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="w-full pb-4">
      <div className="relative w-full aspect-4/5 md:aspect-21/9 overflow-hidden cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000"
          alt="Concert and Festival Shop"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center md:justify-end items-start p-6 bg-black/5">
          <div className="max-w-xl">
            <h2 className="text-white text-5xl font-normal leading-[0.9] uppercase tracking-tighter mb-2 drop-shadow-md">
              Concert & <br /> Festival Shop
            </h2>

            <div className="flex items-center gap-2 mb-8">
              <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Spring '26 -------- New Arrivals
              </p>
            </div>

            <div className="flex gap-3">
              <Button variant="white">Women's</Button>
              <Button variant="white">Men's →</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
