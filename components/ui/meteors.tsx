'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { useMemo, useEffect, useState } from 'react'

export const Meteors = ({
    number,
    className,
}: {
    number?: number
    className?: string
}) => {
    const [mounted, setMounted] = useState(false)

    const meteors = useMemo(() => {
        if (!mounted) return []
        const count = number || 20
        return Array.from({ length: count }).map((_, idx) => ({
            id: idx,
            delay: Math.random() * 5,
            duration: Math.floor(Math.random() * (10 - 5) + 5),
            position: (idx / count) * 100,
        }))
    }, [number, mounted])

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
        >
            {meteors.map((meteor) => (
                <span
                    key={'meteor' + meteor.id}
                    className={cn(
                        'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
                        'before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-[""]',
                        className
                    )}
                    style={{
                        top: '-40px',
                        left: `${mounted ? meteor.position : 0}%`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.duration}s`,
                    }}
                ></span>
            ))}
        </motion.div>
    )
}