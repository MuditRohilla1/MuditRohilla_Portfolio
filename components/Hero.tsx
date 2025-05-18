import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { ContainerTextFlip } from './ui/container-text-flip'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { FaUser } from 'react-icons/fa6'
import Image from 'next/image'

const Hero = () => {
    return (
        <div id="Home" className="relative pb-20 pt-36">
            <Spotlight />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Section */}
                    <div className="text-center md:text-left flex flex-col justify-center items-center">
                        <h2 className="uppercase tracking-widest text-xs text-blue-100 italic mb-4">
                            Let&apos;s Get Started
                        </h2>

                        <h1 className="text-[35px] md:text-5xl lg:text-6xl font-bold mb-4">
                            Hi, I&apos;m Mudit Rohilla, a{' '}
                            <span className="inline-block">
                                <ContainerTextFlip
                                    words={['Frontend', 'Backend', 'FullStack']}
                                />
                            </span>{' '}
                            Developer
                        </h1>

                        <TextGenerateEffect
                            className="text-[28px] md:text-lg lg:text-xl text-gray-700 mb-6"
                            words="Lets Transform Concept into Seamless Experience !!"
                        />

                        <a href="#About">
                            <button className="flex items-center gap-3 px-10 py-4 border-2 border-neutral-500 rounded-full uppercase font-semibold text-sm hover:bg-neutral-700 hover:text-white transition">
                                About Me
                                <FaUser />
                            </button>
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <Image
                                src="/profile.png"
                                alt="Mudit Rohilla"
                                width={384} // w-96
                                height={384} // h-96
                                className="w-72 h-72 lg:h-96 lg:w-96 rounded-full object-cover shadow-[0_0_50px_rgba(59,130,246,0.4)] border-4 border-neutral-700"
                            />
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
