"use client"
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


interface card {
    title: string
    subTitle: string
    img:StaticImageData
}
const DecentralizedMoneyCard = ({ card }: { card: card }) => {
    const [hovered, setHovered] = useState(false);
     const titleRef = useRef<HTMLDivElement>(null);
     const containerRef = useRef<HTMLDivElement>(null);
useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.offsetHeight;
        const translateValue = `calc(80% - ${titleHeight}px)`;
        if (containerRef.current) {
            if (!hovered) {    
                containerRef.current.style.transform = `translateY(${translateValue})`;
            }
            else {
                 containerRef.current.style.transform = `translateY(0px)`;
            }
        }
    }
  }, [hovered]);
  return (
      <div className='bg-[#F3F5F7] relative overflow-hidden group ' onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
          <div className='flex justify-center items-center'>  
          <Image src={card.img} alt='card image' className='object-contain'/>
          </div>
          <div ref={containerRef} className='bg-white/60 backdrop-blur-md absolute bottom-0  transition-all duration-500 ease-in-out p-6' >
              <div ref={titleRef} className='text-black font-semibold text-4xl'>{ card.title}</div>
              <div className='text-[#596780] mt-3'>{ card.subTitle}</div>
          </div>
    </div>
  )
}

export default DecentralizedMoneyCard