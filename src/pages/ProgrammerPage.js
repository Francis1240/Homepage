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
            <div style={{positon:"fixed", pointerEvents:"none", width:"100vw", height: "100vh"}}></div>
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
                        <p>I am an undergraduate(2017-2021) Computer Science/Mathematics major at Macalester College, Saint Paul, Minnesota. <br/>
                        In July 2020, I obtained Amazon Web Services Professional DevOps Engineer Certification.</p>
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
                    <div className="section" id="projects">
                        <div id="experience-header">
                            <h1>Projects and Work Experiences</h1>
                            <hr/>

                        </div>
                        <ul id="project-list">
                            <li className="project">
                                <h2><a style={{ color:"black"}} href="https://github.com/Francis1240/blockly">Software Development Research Internship</a></h2>
                                <h3>Google</h3>
                                <h4>May 2019 - August 2019</h4>
                                <ul className="project-details-list">
                                    <li>
                                        Developed an experimental version of Blockly, a pure-JS library that represents code as interlocking blocks, 
                                        which is widely used in all "Code with Google" programs. 
                                    </li>
                                    <li>
                                        Worked closely with the Blockly team at Google in a program hosted by Professor Lauren Milne @ Macalester College 
                                        to integrate accessibility features into the existing JavaScript code that generates the UI, making Blockly compatible with screen readers. 
                                    </li>
                                    <li>
                                        Implemented and tested rendering optimization and code simplification. 
                                    </li>
                                    <li>
                                        Published the resulting paper <a href="https://doi.org/10.1145/3308561.3354589">"Making the Blockly Library Accessible via Touchscreen"</a> on Association for Computing Machinery(ACM) 2019. 
                                    </li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2>Teaching Assistant for Algorithms Design and Analysis</h2>
                                <h3>Macalester College</h3>
                                <h4>September 2018 - May 2019</h4>
                                <ul className="project-details-list">
                                    <li>
                                        Helping professors design lectures and homework.
                                    </li>
                                    <li>
                                        Hosting office hours where I help students who have difficulties understanding the class or lectures to share more about algorithms to interested students. 
                                    </li>
                                    <li>
                                        Contents include: dynamic programming, Dijkstra's, b-tree, etc 
                                    </li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2><a style={{color:"black"}} href="https://github.com/Francis1240/WatchDog">WatchDog Project</a></h2>
                                <h3>Are you safe here? - World's first mobile safety-risk monitor. (Full Stack) </h3>
                                <h4>December 2018 - September 2019</h4>
                                <ul className="project-details-list">
                                    <li>
                                        Using public historical crime data, I developed this app to calculate safety risks for t he current location of the user, with risk-factors like time of the day, weather and season taken into consideration. 
                                    </li>
                                    <li>
                                        <b>Front-End</b>: I developed a cross-platform mobile interface using React Native, which will send notifications when one of the factors becomes significant. The interface itself also shows the current values, together with a map to show the location of t he incidents.  
                                    </li>
                                    <li>
                                        <b>Back-End</b>: Java and Go are used to read and analyze the data, then calculate the individual ratings.  
                                    </li>
                                    <li>
                                        <b>Database</b>: The historical crime data is stored locally and is accessed using MySQL/ MongoDB.
                                    </li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2><a style={{color:"black"}} href="https://francisv6.wixsite.com/visa-vis">Visa-vis Project</a></h2>
                                <h3>Task-tracker designed for OPT application</h3>
                                <h4>September 2019 - December 2019 </h4>
                                <ul className="project-details-list">
                                    <li>
                                        Task-tracker created specifically for the Optional Practical Training(OPT) application process for international students in the U.S. 
                                    </li>
                                    <li>
                                        Demo created using React library. 
                                    </li>
                                </ul>
                            </li>
                            <li className="project">
                                <h2>Life</h2>
                                <h4>September 1998 - Now</h4>
                                <ul className="project-details-list">
                                    <li>
                                        Hardest and most complicated project ever. No documentation at all.
                                    </li>
                                    <li>
                                        Very expensive for the project supervisors(my parents), until production(college graduation.)
                                    </li>
                                    <li>
                                        No testing/staging before deployment.
                                    </li>
                                    <li>
                                        Down-time not allowed. Single instance, no backup/snapshot.
                                    </li>
                                    <li>
                                        Version 1.0 artifacts are built and ready to be deployed. 
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="section" id="other-info">
                        <p>I spend my free time <Link to="/photographer">taking pictures</Link>, skiing and sometimes skydiving. And I LOVE cooking Chinese food(authentic, of course.) </p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ProgrammerPage;