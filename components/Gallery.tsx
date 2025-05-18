import React from 'react'
import InfiniteMenu from './ui/infinite'
import SplitText from './ui/splitText'

const Gallery = () => {
    const items = [
        {
            image: '/Gallery1.jpg',
            link: 'https://www.linkedin.com/in/muditrohilla/',
            title: 'Creative UI Designer',
            description: 'Pixel-perfect UIs with a creative touch.'
        },
        {
            image: '/Gallery2.jpg',
            link: 'https://github.com/muditrohilla',
            title: 'Tech Explorer',
            description: 'Code-driven, detail-focused builder.'
        },
        {
            image: '/Gallery3.jpg',
            link: '/projects',
            title: 'Code & Logic',
            description: 'Logical thinker, curious mind.'
        },
        {
            image: '/Gallery4.jpg',
            link: '/blogs',
            title: 'Words & Wisdom',
            description: 'Love writing about what I learn.'
        },
        {
            image: '/Gallery5.jpg',
            link: '/experience',
            title: 'My Journey',
            description: 'Passionate about meaningful work.'
        },
        {
            image: '/Gallery6.jpg',
            link: '/skills',
            title: 'Tech Stack',
            description: 'Always learning, always building.'
        },
        {
            image: '/Gallery7.jpg',
            link: '/contact',
            title: 'Say Hello!',
            description: 'Let’s build something awesome.'
        }
    ];

    return (
        <div id='About' className="pt-20 mt-28 mb-28 rounded-3xl px-4 md:px-10">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-2">
                A small Section{" "}
                <SplitText
                    text="About Me !!"
                    className="text-emerald-500 italic"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </h1>
            <p className='text-xs tracking-widest text-center text-gray-300'>
                Hold and drag the image
            </p>

            <div
                className="border border-emerald-500 h-[600px] w-full flex justify-center items-center rounded-3xl bg-white shadow-md overflow-hidden"
            >
                <InfiniteMenu items={items} />
            </div>
        </div>
    )
}

export default Gallery
