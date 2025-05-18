import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandX,
} from "@tabler/icons-react";

export function ContactLinks() {
    const links = [
        {
            title: "Linkdin",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/mudit-rohilla-43a031232/",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.instagram.com/mudit_rohilla/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/Mudit_Rohilla7",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/MuditRohilla1",
        },        
        {
            title: "LeetCode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://leetcode.com/u/Mudit_rohilla/",
        },
    ];
    return (
        <div className="flex items-center justify-center mb-10 w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
