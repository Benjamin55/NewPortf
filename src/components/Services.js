import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

function Services() {
    return (
        <div className='services'>
            <div className="py-5">
                <div className="container">
                    <h1>services</h1>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faDesktop} size="2x" />
                                </div>
                            
                                <h3>Web design</h3>
                                <p>I aproach each project individually and allways focus on the result</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faFileCode} size="2x" />
                                </div>
                                <h3>Web development</h3>
                                <p>Your website wil be build with new proven technologies</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faFacebookF} size="2x" />
                                </div>
                                <h3>Facebook ads</h3>
                                <p>your potential clients will see your services or products on facebook</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className='icon' icon={faGoogle} size="2x" />
                                </div>
                                <h3>Google search</h3>
                                <p>Your Service or product wil appear at the top of the Google Search</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Services
