"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        const radius = 100;
        const [visible, setVisible] = React.useState(false);

        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        function handleMouseMove({ currentTarget, clientX, clientY }: any) {
            const { left, top } = currentTarget.getBoundingClientRect();
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #10b981,  /* emerald-500 */
              transparent 80%
            )
          `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="group/input rounded-lg p-[2px] transition duration-300"
            >
                <div className="rounded-lg bg-white dark:bg-zinc-600">
                    <input
                        type={type}
                        className={cn(
                            `flex h-10 w-full rounded-md border border-transparent bg-transparent px-3 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:text-white dark:placeholder:text-slate-200`,
                            className
                        )}
                        ref={ref}
                        {...props}
                    />
                </div>
            </motion.div>
        );
    }
);
Input.displayName = "Input";

export { Input };
