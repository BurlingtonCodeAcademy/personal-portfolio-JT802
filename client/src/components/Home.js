import React from 'react';

function Home() {
  return (
    <div>
      <div className='image-wrapper'>
        <img src='../Images/jonathan.jpeg' id='profilePic' alt='gray hair' />
        <p>I'm a passionate, novice web developer from Burlington, Vermont, and am currently a software development bootcamp student at Burlington Code Academy. I've lived in Vermont since 1992, and absolutely fell in love with the Green Mountains. I've done a great many things so far in my life: Red Cross volunteer, circus camp counselor, guest lecturer for a college course, worked in social services, built and repaired over 150 computers, and now I'm learning (and fascinated by) software development.</p>

        <p>I am fascinated with emerging technology, the evolving landscape of cybersecurity, and the future of Vermont's tech opportunities. This is a field that prides itself on quick learning, the ability to adapt to ever-changing circumstances, ongiong compliance, and thinking on the fly. </p>
      </div>

      <div className='its-me'>
        <a href='/aboutme'><div>Find out more about me</div></a>
        <a href='/hobbiesInterests'><div>What I do when I'm not writing code</div></a>
        <a href='/projects'><div>See my currently in-progress projects</div></a>
        <a href='/workHistory'><div>What I did prior to software development</div></a>
      </div>
    </div>

  )
}

export default Home