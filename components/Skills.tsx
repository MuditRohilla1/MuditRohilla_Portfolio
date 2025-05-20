import React from 'react';
import {
    FiBarChart2,
    FiBook,
    FiCloud,
    FiEdit,
    FiFileText,
    FiHeart,
} from 'react-icons/fi';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import SplitText from './ui/splitText';
import GlassIcons from './ui/GlassIcon';

const items = [
    {
        icon: <FiFileText />,
        color: "red",
        label: "C",
        imageSrc: "/c.svg",
    },
    {
        icon: <FiBook />,
        color: "purple",
        label: "C++",
        imageSrc: "/c++.svg",
    },
    {
        icon: <FiHeart />,
        color: "green",
        label: "Python",
        imageSrc: "/python.svg",
    },
    {
        icon: <FiCloud />,
        color: "indigo",
        label: "Java",
        imageSrc: "/java.svg",
    },
    {
        icon: <FiEdit />,
        color: "orange",
        label: "HTML",
        imageSrc: "/html.svg",
    },
    {
        icon: <FiBarChart2 />,
        color: "green",
        label: "CSS",
        imageSrc: "/css3.svg",
    },
    {
        icon: <FiBarChart2 />,
        color: "brown",
        label: "JavaScript",
        imageSrc: "/javascript.svg",
    },
    {
        icon: <FiBarChart2 />,
        color: "green",
        label: "MongoDb",
        imageSrc: "/mongodb.svg",
    },
    {
        icon: <FiBarChart2 />,
        color: "red",
        label: "Sql",
        imageSrc: "/sql.svg",
    },
    {
        icon: <FiBarChart2 />,
        color: "gray",
        label: "React",
        imageSrc: "/re.svg",
    },
    {
        icon: <FiBarChart2 />,
        color: "white",
        label: "Tailwind",
        imageSrc: "/tail.svg",
    },
];

const Skills = () => {
    return (
        <>
            {/* Gradient background for small screens only */}
            <div className="block md:hidden bg-gradient-to-b from-gray-800 to-black py-14 mt-16 rounded-3xl px-4">
                <div id="Skills" className="z-20 w-full max-w-6xl mx-auto">
                    <h1 className="heading mb-12">
                        <SplitText
                            text="Skills"
                            className="heading text-2xl font-semibold text-center capitalize text-emerald-500 italic"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                        {" "} I bring to the Table
                    </h1>
                    <div className="w-full">
                        <GlassIcons items={items} />
                    </div>
                </div>
            </div>

            {/* Background beams for md and up */}
            <div className="hidden md:block">
                <BackgroundBeamsWithCollision className="mt-28 pb-28 rounded-4xl">
                    <div id="Skills" className="pt-5 z-20 mt-28 w-full px-2 sm:px-4 md:px-8 rounded-4xl">
                        <h1 className="heading mb-12">
                            <SplitText
                                text="Skills"
                                className="heading text-2xl font-semibold text-center capitalize text-emerald-500 italic"
                                delay={150}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                threshold={0.2}
                                rootMargin="-50px"
                            />
                            {" "} I bring to the Table
                        </h1>
                        <div className="w-full">
                            <GlassIcons items={items} />
                        </div>
                    </div>
                </BackgroundBeamsWithCollision>
            </div>
        </>
    );
};

export default Skills;
