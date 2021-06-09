import React from 'react';
import Typed from 'react-typed';

function Header() {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>web development and web design</h1>
                <Typed 
                    className='typed-text'
                    strings={["Web Design", "Web Development", "Facebook Ads", "Google Ads", "Social Networks"]}
                    typeSpeed={30}
                    backSpeed={40}
                    loop
                />
                <a href='#' className='btn-main-offer'>contact us</a>
            </div>
            
        </div>
    )
}

export default Header
