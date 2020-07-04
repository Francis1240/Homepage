import React from 'react';
import "../css/ProgrammerPage.css";
import myPhoto from "../res/img/Me.JPG";
import downArrow from "../res/img/double-down-arrow.png";
import awsBadge from "../res/img/aws-badge.png";
import macalesterLogo from "../res/img/macalester.png";
import { Link } from 'react-router-dom';
import linkedInLogo from "../res/img/LI-In-Bug.png";
import mailLogo from "../res/img/mail-icon.png";


const ProgrammerPage = () =>{
    return (
        <>  
            <div style={{positon:"fixed", pointerEvents:"all", width:"100vw", height: "100vh"}}></div>
            <img id="programmer-page-background" src={myPhoto} alt="Background"/>
            
            <Link to="/">
                <img id="home" src={downArrow} alt="Go back to home page"/>
            </Link>
            <div id="programmer-page-wrapper">
                <div id="header">
                    <h1 className="heading">
                       Yufan "Francis" Ma
                    </h1>
                    <hr/>
                    <h2>Software Development Engineer</h2>
                </div>
                <div>
                    <a href="#about-me">
                        <img id="down-arrow" src={downArrow} alt="Down Arrow"/>
                    </a>
                    <div className="section" id="about-me">
                        <h1>About Me</h1>
                        <p>I am an undergraduate(2017-2021) Computer Science/Mathematics major at <a href="https://macalester.edu">Macalester College</a>, Saint Paul, Minnesota. <br/>
                        I am currently certified by AWS as a Professional DevOps Engineer.</p>
                        <a href="https://www.youracclaim.com/badges/94973b32-efaf-46e1-b723-c37de0b80de1/linked_in_profile">
                            <img className="logo-big" id="aws-badge" src={awsBadge} alt="AWS DevOps Certification Badge"/>
                        </a>
                        <a href="http://macalester.edu">
                            <img className="logo-big" id="macalester-logo" src={macalesterLogo} alt="Macalester College Logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/yufan-francis-ma-b1673812b/">
                            <img id="linkedIn-logo" src={linkedInLogo} alt="My LinkedIn Account"/>
                        </a>
                        <a href="mailto:contactme@yufanma.com">
                            <img id="mail-logo" src={mailLogo} alt="My Email Account"/>
                            <p id="email-address">contactme@yufanma.com</p>
                        </a>
                    </div>
                    <div className="section" id="experience">
                        <div id="experience-header">
                            <h1>My Experience</h1>
                            <hr/>

                            <p>Under Construction</p>

                        </div>
                    </div>
                    <div className="section" id="contact">

                    </div>
                </div>
            </div>
        </>
    );
}


export default ProgrammerPage;