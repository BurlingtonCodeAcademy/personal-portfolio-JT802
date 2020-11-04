import React from 'react';

function Home() {
  return (
    <div className='home-wrapper'>
      <div className='image-wrapper'> {/* I think this is an OK introduction, but it blends somewhat into the About Me page. */}
        <img src='../Images/jonathan.jpeg' id='profilePic' alt='gray hair' />
        <h3>I'm a passionate, novice web developer from Burlington, Vermont, currently a software development bootcamp student (Fall 2020) at Burlington Code Academy. I've lived in Vermont since 1992, and absolutely fell in love with the Green Mountains. I am fascinated with emerging technology, the evolving landscape of cybersecurity, and the future of Vermont's tech opportunities. This is a field that prides itself on quick learning, the ability to adapt to ever-changing circumstances, ongiong compliance, and thinking on the fly. I've done a many things so far in my life: Red Cross volunteer, circus camp counselor, guest lecturer for a college course, worked in social services, built and repaired over 150 computers, and now I'm learning (and fascinated by) software development.</h3>
      </div>

      <div className='its-me'> {/* These links are a concise version of the NavBar. Also, I remembered I needed to include my LinkedIn. */}
        <a href='/aboutme'><div>Find out more about me ... </div></a>
        <br />
        <a href='/hobbiesInterests'><div>What I do when I'm not writing code ... </div></a>
        <br />
        <a href='/projects'><div>See my in-progress projects ... </div></a>
        <br />
        <a href='/workHistory'><div>What I did prior to software development ... </div></a>
        <br />
        <a href='https://www.linkedin.com/in/jrtresch'><div>Connect with me on LinkedIn ... </div></a>
      </div>
    </div>

  )
}

export default Home