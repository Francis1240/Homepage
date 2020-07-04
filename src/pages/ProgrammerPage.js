import React from 'react';
import "../css/ProgrammerPage.css";
import myPhoto from "../res/img/Me.JPG";
import downArrow from "../res/img/double-down-arrow.png";
import { Link } from 'react-router-dom';
const ProgrammerPage = () =>{
    return (
        <>  
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
                <a href="#about-me">
                    <img id="down-arrow" src={downArrow} alt="Down Arrow"/>
                </a>
                <div id="about-me">
                    <h>About Me</h>
                </div>
                <div id="experience">

                </div>
                <div id="contact">

                </div>
            </div>
        </>
    );
}


export default ProgrammerPage;