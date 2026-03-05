import React from "react";
import Button from "../ui/Button";
import womenShorts from "../../assets/womenShorts.mp4";
import menShorts from "../../assets/menShorts.jpg";

const HeroGrid = () => {
  return (
    <section className="w-full pb-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="relative w-full aspect-4/5 md:aspect-4/3 overflow-hidden cursor-pointer">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={womenShorts}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8">
            <Button variant="white">Women's Shorts →</Button>
          </div>
        </div>
        <div className="relative w-full aspect-4/5 md:aspect-4/3 overflow-hidden cursor-pointer">
          <img
            src={menShorts}
            className="w-full h-full object-cover"
            alt="Festival"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center p-8">
            <Button variant="white">Men's Shorts →</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGrid;
