import React from 'react';

//I managed to make the footer persist across pages, though not as tightly as I'd hoped.
function Footer() {
    return (
        <div className="footer-wrapper">
            <div id='questComment'>
                <span>Questions or comments? Get in touch!</span>
            </div>
            <div> {/* Olivia helped me get this footer laid out satisfactorily. I found it to be the toughest part of this project. */}
                <form className="form-wrapper">
                    <input id="name" type="text" placeholder="Name" />
                    <input id="email" type="text" placeholder="Email" />
                    <textarea id="textarea" placeholder="Message"></textarea>
                    <button id="submitButton" type="button">Submit</button>
                    {/* What if someone wants to actually use this form to get in touch with me? */}
                    {/* How can I make the Submit button actually send the information somewhere? */}
                </form>
            </div> {/* Thanks to GJ for providing the social-media icons from an earlier project. */}
            <div id='socialMedia'>
                <a href='/'><img src='../Icons/home.png' id='burly' alt='' />Burlington, Vermont</a>
                <a href='mailto:jonathan.tresch@gmail.com'><img src='../Icons/email.png' id='eMail' alt='' />Email Me</a>
                <a href='/'><img src='../Icons/phone.png' id='phone' alt='' />Via railroad semaphore</a>
                <a href='https://www.instagram.com/3rdrailrunner'><img src='../Icons/instagram.png' id='instagram' alt='' />Instagram</a>
                <a href='https://www.facebook.com/jonathan.tresch'><img src='../Icons/facebook.png' id='effBee' alt='' />Facebook</a>
                <a href='https://www.twitter.com/PhoenixDev802'><img src='../Icons/twitter.png' id='bird' alt='' />Twitter</a>
            </div>
            <div id='copyright'> {/* In case Bob or the TAs wonder, Eli Crow is my partner, and he wanted to contribute to this project. */}
                <h3>| Website (C) Jonathan R. Tresch, 2020 |</h3><h3>| Additional photography by Eli Crow, 2018-2020 |</h3>
            </div>
        </div>
    )
}

export default Footer