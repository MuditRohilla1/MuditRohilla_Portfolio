"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
    IconHome,
    IconMessage,
    IconUser,
    IconBriefcase,
    IconBulb,
    IconBook,
} from "@tabler/icons-react";

export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "#Home",
            icon: <IconHome className="h-4 w-4" />,
        },
        {
            name: "About",
            link: "#About",
            icon: <IconUser className="h-4 w-4" />,
        },
        {
            name: "Education",
            link: "#Education",
            icon: <IconBook className="h-4 w-4" />,
        },
        {
            name: "Skills",
            link: "#Skills",
            icon: <IconBulb className="h-4 w-4" />,
        },
        {
            name: "Projects",
            link: "#Projects",
            icon: <IconBriefcase className="h-4 w-4" />,
        },
        {
            name: "Contact",
            link: "#Contacts",
            icon: <IconMessage className="h-4 w-4" />,
        },
    ];

    return (
        <div className="relative w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
