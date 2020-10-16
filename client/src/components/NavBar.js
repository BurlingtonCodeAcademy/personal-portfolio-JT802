import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <nav id='navigation'>
            <Link className='navText' to='/'>Home</Link>
            <Link className='navText' to="/aboutMe">About Me</Link>
            <Link className='navText' to='/hobbiesInterests'>Hobbies and Interests</Link>
            <Link className='navText' to='/projects'>Projects</Link>
            <Link className='navText' to='/workHistory'>Experience</Link>
    </nav>
    )
}

export default NavBar