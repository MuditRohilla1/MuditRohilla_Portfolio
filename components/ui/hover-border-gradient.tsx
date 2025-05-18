"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "div",
    duration = 1,
    clockwise = true,
    ...props
}: React.PropsWithChildren<{
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
}>) {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState<Direction>("TOP");

    // Explicitly type the directions array as Direction[]
    const directions = useMemo<Direction[]>(
        () => ["TOP", "LEFT", "BOTTOM", "RIGHT"],
        []
    );

    const movingMap: Record<Direction, string> = {
        TOP: "radial-gradient(40% 60% at 50% 0%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)",
        LEFT: "radial-gradient(40% 60% at 0% 50%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)",
        BOTTOM: "radial-gradient(40% 60% at 50% 100%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)",
        RIGHT: "radial-gradient(40% 60% at 100% 50%, #3b82f6 0%, rgba(59, 130, 246, 0) 100%)",
    };

    const highlight = "radial-gradient(circle at center, #60a5fa 0%, rgba(96, 165, 250, 0) 100%)";

    useEffect(() => {
        const rotateDirection = (current: Direction): Direction => {
            const index = directions.indexOf(current);
            const next = clockwise ? 
                (index + 1) % directions.length : 
                (index - 1 + directions.length) % directions.length;
            return directions[next]; // Now properly typed as Direction
        };

        if (!hovered) {
            const interval = setInterval(() => {
                setDirection((prev) => rotateDirection(prev));
            }, duration * 1000);
            return () => clearInterval(interval);
        }
    }, [hovered, duration, clockwise, directions]);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative inline-flex items-center justify-center p-1 rounded-full overflow-hidden",
                containerClassName
            )}
            {...props}
        >
            {/* Glow animation layer */}
            <motion.div
                className="absolute inset-0 z-0 rounded-full"
                style={{
                    filter: "blur(12px)",
                    mixBlendMode: "screen",
                }}
                initial={{ background: movingMap[direction] }}
                animate={{
                    background: hovered ? [movingMap[direction], highlight] : movingMap[direction],
                }}
                transition={{ duration, ease: "linear" }}
            />
            {/* Image or content */}
            <div
                className={cn(
                    "relative z-10 rounded-full overflow-hidden",
                    className
                )}
            >
                {children}
            </div>
        </Tag>
    );
}
