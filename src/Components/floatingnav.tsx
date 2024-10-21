import React from "react";
import { FloatingDock } from "@/Components/UI/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrandInstagram,
  IconUserScan,
  IconBrandLinkedin,
  IconBrandAppstore,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/akhilesh-wankhede-1b278b27b/",
    },
    {
      title: "Resume",
      icon: (
        <IconUserScan className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://neko705.github.io/Resume/",
    },
    {
      title: "Akhilesh Wankhede",
      icon: (
        <IconBrandAppstore className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/akhilesh_d_w/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Neko705",
    },
  ];
  return (
    <div className="fixed inset-x-0 bottom-5 flex justify-center ">
      <FloatingDock
        mobileClassName="fixed bottom-5 right-5 " 
        items={links}
      />
    </div>
  );
}
