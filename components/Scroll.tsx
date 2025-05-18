'use client'

import React from 'react'
import ScrollVelocity from './ui/scrollVelocity';

const Scroll = () => {
    const velocity = 80;
    const creativeTexts = [
        'Crafting Pixel-Perfect UIs',
        'Scaling Ideas with Code',
    ]
    return (
        <div className='w-full overflow-visible mt-24'>
            <ScrollVelocity
                texts={creativeTexts}
                velocity={velocity}
                className="custom-scroll-text"
                numCopies={8}
                parallaxClassName="parallax"
                scrollerClassName="scroller"
            />
        </div>
    )
}

export default Scroll
