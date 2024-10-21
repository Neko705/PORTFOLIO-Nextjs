"use client"

import { cn } from "@/app/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/Components/UI/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion"
import { div } from "framer-motion/client";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className=" pb-10 max-w-6xl mx-auto md:auto-rows-[15rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 bg-cyan-500"></div>
);

const SkeletonZero = () => (
 <div>
  <Image
          src="/gt.jpg"
          width={500}
          height={500}
          className="w-140 h-32 rounded-xl object-cover  "
          alt="linear board demo"
        />
 </div>
);

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.8,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 3,
      },
    },
  };
  const arr = new Array(4).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
  <>
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ff7652, #e73c7e, #23a6d5, #28d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
    </>
  );
};


const items = [
  {
    title: "About Me",
    description: "I'm a very ambitious Front-end Developer looking for a role in an IT company with opportunities to work and learn with the latest technologies on challenging and diverse projects.",
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Dawn of Innovation",
    description: "I began my web development journey after graduation by taking a course on Coursera, where my passion for front-end development was sparked. I learned HTML, CSS, and JavaScript, and worked on basic front-end projects, gaining a solid understanding of the fundamentals.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "I learned the essentials of UI/UX design, focusing on creating visually appealing and user-friendly web pages. After that, I was introduced to the Next.js framework, which enhanced my development skills even further.",
    header: <SkeletonTwo />,
    className: "md:col-span-4",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
