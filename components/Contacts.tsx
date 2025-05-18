'use client'

import React, { useEffect, useState } from 'react'
import ShapeBlur from './ui/shapeBlur'
import { SignUpForm } from './ui/signupForm'
import SplitText from './ui/splitText'
import { ContactLinks } from './ui/contactlinks'
import { Meteors } from './ui/meteors'

const Contacts = () => {
    const [pixelRatio, setPixelRatio] = useState(1)

    useEffect(() => {
        setPixelRatio(window.devicePixelRatio || 1)
    }, [])

    return (
        <div id="Contacts" className="relative rounded-3xl pt-20 mt-28 mb-20 overflow-hidden">
            {/* Full Background Meteors */}
            <div className="pointer-events-none absolute inset-0 w-full h-full z-0">
                <Meteors number={50} />
            </div>

            {/* Foreground content */}
            <div className="relative z-10">
                <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
                    Let&apos;s Build a New{' '}
                    <SplitText
                        text="Connection !!"
                        className="text-emerald-500 italic"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Shape Blur */}
                    <div className="relative h-[500px] hidden md:block overflow-visible">
                        <ShapeBlur
                            variation={0}
                            pixelRatioProp={pixelRatio}
                            shapeSize={1}
                            roundness={0.5}
                            borderSize={0.05}
                            circleSize={0.5}
                            circleEdge={1}
                        />
                    </div>

                    {/* Right: Sign up form */}
                    <div>
                        <SignUpForm />
                    </div>
                </div>

                <div className="mt-5">
                    <ContactLinks />
                </div>
            </div>
        </div>
    )
}

export default Contacts
