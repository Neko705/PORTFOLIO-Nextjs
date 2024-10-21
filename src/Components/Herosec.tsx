"use client";
import { MaskContainer } from "@/Components/UI/svg-mask-effect";
import { image } from "framer-motion/client";
import { img } from "framer-motion/m";
import Image from "next/image";

export function SVGMaskEffectDemo() {
  return (
    <div >
      
      <MaskContainer
        revealText={
          <Image
          src="/back-g.jpg"
          width={900}
          height={900}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        }
      >
        
       <p className="text-5xl">
        Hi!.. This is <span className="text-blue-500">Akhilesh Wankhede</span> Front-End Developer and This is my <span className="text-red-500">Portfolio...</span></p>
      </MaskContainer>
    </div>
  );
}
