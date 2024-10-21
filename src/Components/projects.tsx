"use client";
import React from "react";
import { StickyScroll } from "@/Components/UI/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Portfolio in Nextjs",
    description:
      "For my portfolio project, I used Next.js to build a dynamic and responsive website showcasing my skills and projects. Leveraging Next.js's powerful features like server-side rendering and optimized performance, I created a fast, modern, and user-friendly portfolio that highlights my journey as a web developer.",
    content: (
    <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/logo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
      
    ),
  },
  {
    title: "YouTube Clone",
    description:
      "For my YouTube Clone project, I recreated the core functionality and design of YouTube using HTML, CSS, and JavaScript. The project features a responsive layout, video player, and search functionality. It helped me enhance my skills in front-end development and understand the structure of dynamic content platforms.",
    content: (
    <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/YT.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: " Apple Website UI",
    description:
      "For my project, I designed an Apple-inspired UI website, focusing on sleek, minimalistic design and seamless user experience. Leveraging my skills in HTML, CSS, and JavaScript, I recreated the clean, intuitive interface that mirrors Apple’s design philosophy, ensuring responsive layouts and smooth navigation across devices.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/AP.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (<>
    <h3 className="text-white-800 text-4xl max-w-xl mx-auto text-center font-semibold sm:text-4xl">Projects.</h3>
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
    </>
  );
}
