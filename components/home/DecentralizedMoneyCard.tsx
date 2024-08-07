"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface card {
  title: string;
  subTitle: string;
  img: StaticImageData;
  id: string;
}
const DecentralizedMoneyCard = ({ card }: { card: card }) => {
  const [hovered, setHovered] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (titleRef.current) {
      if (window.innerWidth > 1280) {
        const titleHeight = titleRef.current.offsetHeight;
        const translateValue = `calc(80% - ${titleHeight}px)`;
        if (containerRef.current) {
          if (!hovered) {
            containerRef.current.style.transform = `translateY(${translateValue})`;
          } else {
            containerRef.current.style.transform = `translateY(0px)`;
          }
        }
      }
    }
  }, [hovered]);
  return (
    <div className=" overflow-hidden">
      <div
        className="group relative h-[460px] rounded-xl bg-[#F3F5F7] sm:min-h-min"
        id={card.id}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-start justify-center">
          <Image
            src={card.img}
            alt="card image"
            className=""
            // objectFit="contain"
          />
        </div>
        <div
          ref={containerRef}
          className="absolute bottom-0 bg-white/60 p-6  backdrop-blur-md transition-all duration-500 ease-in-out"
        >
          <div
            ref={titleRef}
            className="text-2xl font-semibold text-black sm:text-4xl"
          >
            {card.title}
          </div>
          <div className="mt-3 text-[#596780]">{card.subTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default DecentralizedMoneyCard;
