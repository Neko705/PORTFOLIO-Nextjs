// import Image from "next/image";

import { BentoGridSecondDemo } from "@/Components/aboutbox";
import Contact from "@/Components/Contact";
import { FloatingDockDemo } from "@/Components/floatingnav";
import { SVGMaskEffectDemo } from "@/Components/Herosec";
import { StickyScrollRevealDemo } from "@/Components/projects";
import Skills from "@/Components/Skills";


export default function Home(){
  return(
    <main className="min-h-screen ">
      <SVGMaskEffectDemo />
      <FloatingDockDemo />
      <BentoGridSecondDemo />
      <Skills />
      <StickyScrollRevealDemo />
      <Contact />
    </main>
  );
}