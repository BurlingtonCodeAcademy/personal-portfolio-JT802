import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        // ------ Persistant Navigation ------ //
        //It was interesting to learn about react-router-dom and its use for SPAs.
        <nav id='navigation'>
            <Link className='navText' to='/'><button>Home</button></Link>
            <Link className='navText' to="/aboutMe"><button>About Me</button></Link>
            <Link className='navText' to='/hobbiesInterests'><button>Hobbies and Interests</button></Link>
            <Link className='navText' to='/projects'><button>Projects</button></Link>
            <Link className='navText' to='/workHistory'><button>Experience</button></Link>
        </nav>
    )
}

export default NavBar