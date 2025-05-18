"use client";
import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const { scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState("");

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current - scrollYProgress.getPrevious()!;
            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            for (const item of navItems) {
                const section = document.querySelector(item.link);
                if (
                    section &&
                    section.getBoundingClientRect().top + window.scrollY - 80 <= scrollY
                ) {
                    setActive(item.link);
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [navItems]);

    const scrollToSection = (id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                    "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 pl-6 py-2 items-center justify-center space-x-2 sm:space-x-4",
                    className
                )}
            >
                {navItems.map((navItem, idx) => {
                    const isActive = active === navItem.link;

                    return (
                        <button
                            key={`nav-${idx}`}
                            onClick={() => scrollToSection(navItem.link)}
                            className={cn(
                                "flex items-center space-x-2 text-sm font-medium transition-all duration-300 px-2 sm:px-4 py-1 rounded-full",
                                isActive
                                    ? "text-emerald-500 drop-shadow-[0_0_6px_rgba(16,185,129,0.7)]"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-emerald-400 dark:hover:text-emerald-300"
                            )}
                        >
                            <span className="block sm:hidden">{navItem.icon}</span>
                            <span className="hidden sm:block">{navItem.name}</span>
                        </button>
                    );
                })}
            </motion.div>
        </AnimatePresence>
    );
};
