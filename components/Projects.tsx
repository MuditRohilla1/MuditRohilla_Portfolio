"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/Data";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";
import SplitText from "./ui/splitText";
import Image from "next/image";
import { motion } from "framer-motion";

const headingVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
};

const containerVariant = {
    show: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.4,
        },
    },
};

const cardVariant = (direction: "left" | "right") => ({
    hidden: {
        opacity: 0,
        x: direction === "left" ? -60 : 60,
        rotate: direction === "left" ? -5 : 5,
        skewY: direction === "left" ? 4 : -4,
    },
    show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        skewY: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
        },
    },
});

const RecentProjects = () => {
    return (
        <motion.div
            id="Projects"
            className="pt-20 mt-28"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Animated Heading */}
            <motion.h1 variants={headingVariant} className="heading mb-10 text-center">
                A small selection of{" "}
                <SplitText
                    text="Recent Projects!"
                    className="heading font-semibold text-emerald-500 italic"
                    delay={200}
                    animationFrom={{ opacity: 0, transform: "translate3d(0,40px,0)" }}
                    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                />
            </motion.h1>

            {/* Project Cards */}
            <motion.div
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center p-4 gap-16"
                variants={containerVariant}
            >
                {projects.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={cardVariant(index % 2 === 0 ? "left" : "right")}
                        whileHover={{
                            scale: 1.03,
                            rotate: index % 2 === 0 ? 1 : -1,
                            transition: { type: "spring", stiffness: 100 },
                        }}
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                    >
                        <PinContainer title={item.link} href={item.link}>
                            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <Image src="/bg.png" fill alt="bgImage" className="object-cover" />
                                </div>
                                <Image
                                    src={item.img}
                                    alt="cover"
                                    fill
                                    className="z-10 absolute bottom-0"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{ color: "#BEC1DD", margin: "1vh 0" }}
                            >
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, i) => (
                                        <div
                                            key={i}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * i + 2}px)`,
                                            }}
                                        >
                                            <Image src={icon} alt="icon" fill className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <Link href={item.link} target="blank">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            Check Live Site
                                        </p>
                                    </Link>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default RecentProjects;
