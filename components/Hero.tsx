"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { FaDownload, FaUser } from "react-icons/fa6";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
    return (
        <div id="Home" className="relative pb-20 pt-36 overflow-visible">
            {/* Glowing particles */}
            <Spotlight />

            <motion.div
                className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-3xl opacity-30 z-0"
                animate={{ scale: [1, 1.4, 1], x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.div
                className="absolute bottom-0 right-[-150px] w-[250px] h-[250px] bg-purple-500 rounded-full blur-3xl opacity-20 z-0"
                animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
            />

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <motion.div
                        className="text-center md:text-left flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="uppercase tracking-widest text-xs text-blue-100 italic mb-4">
                            Let&apos;s Get Started
                        </h2>

                        <h1 className="text-[35px] md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            Hi, I&apos;m Mudit Rohilla, a{" "}
                            <span className="inline-block">
                                <ContainerTextFlip words={["Frontend", "Backend", "FullStack"]} />
                            </span>{" "}
                            Developer
                        </h1>

                        <TextGenerateEffect
                            className="text-[28px] md:text-lg lg:text-xl text-gray-300 mb-6 max-w-[30rem] mx-auto md:mx-0"
                            words="Lets Transform Concept into Seamless Experience !!"
                        />

                        <div className="flex flex-row gap-6 p-5 flex-wrap justify-center md:justify-start">
                            {/* About Me Button */}
                            <a href="#About">
                                <button className="flex cursor-pointer items-center gap-3 px-8 py-3 border-2 rounded-full uppercase font-semibold text-sm text-cyan-300 border-cyan-400 bg-white/10 backdrop-blur-md shadow-lg hover:bg-cyan-500/30 hover:text-white transition-all duration-300">
                                    About Me
                                    <FaUser />
                                </button>
                            </a>

                            {/* Download Resume Button */}
                            <a href="/Mudit_Resume.pdf" download={"Mudit_Resume"}>
                                <button className="flex cursor-pointer items-center gap-3 px-8 py-3 border-2 rounded-full uppercase font-semibold text-sm text-violet-300 border-violet-400 bg-white/10 backdrop-blur-md shadow-lg hover:bg-violet-500/30 hover:text-white transition-all duration-300">
                                    Download Resume
                                    <FaDownload />
                                </button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <Tilt
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            perspective={1000}
                            transitionSpeed={800}
                            scale={1.05}
                            gyroscope
                        >
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                <Image
                                    src="/profile.png"
                                    alt="Mudit Rohilla"
                                    width={384}
                                    height={384}
                                    className="w-72 h-72 lg:h-96 lg:w-96 rounded-full object-cover shadow-[0_0_50px_rgba(59,130,246,0.4)] border-4 border-neutral-700"
                                />
                            </HoverBorderGradient>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
