"use client";
import { MaskContainer } from "@/Components/UI/svg-mask-effect";
import { image } from "framer-motion/client";
import { img } from "framer-motion/m";

export function SVGMaskEffectDemo() {
  return (
    <div >
      
      <MaskContainer
        revealText={
          // <p className="max-w-3xl mx-auto text-slate-900 text-center  text-5xl font-bold">
          //   Why do we fall?.. So that we can learn to pick ourselves back up
          // </p>
          <img src="https://www.hdwallpapers.in/download/black__white_minimalist_optical_illusion_4k_hd_abstract-HD.jpg" className="h-full w-full "></img>
        }
      >
        
       <p className="text-5xl">
        Hi!.. This is <span className="text-blue-500">Akhilesh Wankhede</span> Front-End Developer and This is my <span className="text-red-500">Portfolio...</span></p>
      </MaskContainer>
    </div>
  );
}
