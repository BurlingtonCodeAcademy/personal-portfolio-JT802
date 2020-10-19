import React from 'react';

function AboutMe() {
    return (
        <div className='about-wrapper'>
            <div className='image-wrapper'>
                <img src='../Images/steam-train.jpeg' id='locomotive' alt='train' />
                <h3>When I'm not tinkering with something or writing code, I find relaxation in non-technological things. Growing up in the mid-Atlantic area, I developed a fondness for trains, both real and model. It's been a beloved pasttime of mine for over thirty years. I also have an appreciation for music, having played the drums, at least casually, for nearly fifteen years. I got into software development after several years of being into computer hardware. Though I came into both hardware and software near middle-age, my love of each keeps growing. My strengths in hardware lie in diagnosis and repair. I love problem-solving, and the "ah ha" moments it often yields. This led me, via a rather circuitous path, into software development. There's just something exhilerating about laboring away, crafting code and seeing it run for the first time. I find solace in the songs code can sing.</h3>
            </div>
        </div>
    )
}

export default AboutMe