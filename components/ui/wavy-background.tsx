"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
} & React.HTMLAttributes<HTMLDivElement>) => {
    const noise = useMemo(() => createNoise3D(), []);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationIdRef = useRef<number>(0);

    const getSpeed = useCallback(() => {
        switch (speed) {
            case "slow": return 0.001;
            case "fast": return 0.002;
            default: return 0.001;
        }
    }, [speed]);

    const waveColors = useMemo(() => colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ], [colors]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = ctx.canvas.width = window.innerWidth;
        let h = ctx.canvas.height = window.innerHeight;
        let nt = 0;

        ctx.filter = `blur(${blur}px)`;

        const handleResize = () => {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
        };

        const drawWave = (n: number) => {
            nt += getSpeed();
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth || 50;
                ctx.strokeStyle = waveColors[i % waveColors.length];
                for (let x = 0; x < w; x += 5) {
                    const y = noise(x / 800, 0.3 * i, nt) * 100;
                    ctx.lineTo(x, y + h * 0.5);
                }
                ctx.stroke();
                ctx.closePath();
            }
        };

        const render = () => {
            ctx.fillStyle = backgroundFill || "black";
            ctx.globalAlpha = waveOpacity;
            ctx.fillRect(0, 0, w, h);
            drawWave(5);
            animationIdRef.current = requestAnimationFrame(render);
        };

        window.addEventListener("resize", handleResize);
        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationIdRef.current);
        };
    }, [blur, backgroundFill, waveOpacity, waveWidth, getSpeed, waveColors, noise]);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div className={cn("h-screen flex flex-col items-center justify-center", containerClassName)}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ filter: isSafari ? `blur(${blur}px)` : undefined }}
            />
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
