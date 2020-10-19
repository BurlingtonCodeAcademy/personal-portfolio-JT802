import React from 'react';


function Footer() {
    return (
        <div className="footer-wrapper">
            <div id='questComment'>
                <h5>Questions or comments? Get in touch!</h5>
            </div>
            <div>
                <form className="form-wrapper">
                    <input id="name" type="text" placeholder="Name" />
                    <input id="email" type="text" placeholder="Email" />
                    <textarea id="textarea" rows="5" cols="50" placeholder="Message"></textarea>
                    <button id="submitButton" type="button">Submit</button>
                </form>
            </div>
            <div id='socialMedia'>
                <a href='#'><img src='../Icons/home.png' id='burly' alt='' />Burlington, Vermont</a>
                <a href='mailto:jonathan.tresch@gmail.com'><img src='../Icons/email.png' id='eMail' alt='' />Email Me</a>
                <a href='#'><img src='../Icons/phone.png' id='phone' alt='' />Via railroad semaphore</a>
                <a href='https://www.instagram.com/3rdrailrunner'><img src='../Icons/instagram.png' id='instagram' alt='' />Instagram</a>
                <a href='https://www.facebook.com/jonathan.tresch'><img src='../Icons/facebook.png' id='effBee' alt='' />Facebook</a>
                <a href='https://www.twitter.com/PhoenixDev802'><img src='../Icons/twitter.png' id='bird' alt='' />Twitter</a>
            </div>
        </div>
    )
}

export default Footer