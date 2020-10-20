import React from 'react';

function Projects() {
    return (
        <div className='projects-wrapper'>

            <ul id='projects'> {/* This can be updated as the course progresses. I don't have any non-class projects to show. */}
                <a href='https://github.com/JT802'> My GitHub portfolio with in-progress projects</a>
                <ul id='projectList'>
                    <li><a href='https://github.com/JT802/guess-the-number-JT802-1'>A simple guess-the-number game</a>  <img src='../Images/guess-num.png' id='guessNum' alt='' /></li>
                    <li><a href='https://github.com/JT802/zorkington-hope-jeff'>Here's a variant on the popular 'Zork' text adventure</a>  <img src='../Images/zork-text.png' id='zorking' alt='' /></li>
                    <li><h4>A mock blog-site project is coming soon.</h4></li>
                    {/* Remock-JT802 will be placed as the third project after I have resubmitted it. */}
                    <li><h4>A simple Tic-Tac-Toe project is coming soon.</h4></li>
                    {/* Tic-Tac-Toe-andrea-jonathan will be placed as the fourth project after the team resubmits it. */}
                </ul>
            </ul>
        </div>
    )
}

export default Projects