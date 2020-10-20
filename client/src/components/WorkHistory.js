import React from 'react';

function WorkHistory() {
    return (
        <div id='workspace'>
            <h4>My resume is available in PDF format via the link below</h4>
            <div id='resume-wrapper'>
                <a href="./Assets/JRT-2020-Resume.pdf" download>
                    <img src="../Images/resume-screenshot.png" id='jonathan-pdf' alt="Resume Screenshot" />
                </a>
            </div> {/* This gave me some inspiration for the recent homework assigned by Etienne. */}
        </div>
    )
}

export default WorkHistory