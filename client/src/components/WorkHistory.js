import React from 'react';

function WorkHistory() {
    return (
        <div id='workspace'>
            <h4>My resume is available (PDF format) via the link below</h4>
            <div id='resume-wrapper'>
                {/* Made a downloadable PDF of my resume */}
                <a href="./Assets/JRT-2020-Resume.pdf" download>
                    {/* Screenshot of resume */}
                    <img src="../Images/resume-screenshot.png" id='jonathan-pdf' alt="Resume Screenshot" />
                </a>
            </div> {/* This helped me complete the Resume Refresh homework for Etienne. */}
        </div>
    )
}

export default WorkHistory