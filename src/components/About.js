import React from 'react';
import face from '../images/face.jpg';

function About() {
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="photo-wrapper">
                    <img className='photo-img' src={face} alt="author" />
                    </div>
                   
                </div>
                <div className="col-lg-6 col-xm-12">
                    <div className="about-heading">
                    <h1>about me</h1>
                    <p>Hello! I am Benjamin. I have been developing websites for over 5 years. I'm a Full-stack Web Developer. Technologies I use is MERN(MongoDB, Express, ReactJS and NodeJS).
                        I create responsive websites that are displayed on all devices desktop and smartphones.

                        Of course, before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout(sketch).
                    </p>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}

export default About
