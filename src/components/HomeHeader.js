import React from 'react';
import githublogo from '../res/img/GitHub.png';
import HomeIcon from '../res/img/HomeIcon.ico';
import { Link } from 'react-router-dom';


const  HomeHeader = () => {

    return (
        <>
            <div className="HomeHeaderWrapper">

                <div className="HomeButton">
                    <img src={HomeIcon} className="HomeButtonIcon" alt="Home Button."/>
                </div>

                <p className="HomepageTitle">
                    Hello, I'm Yufan Ma. 
                </p>
                
                <p className="HomepageSubtitle">
                    Call me Francis.
                </p>
                
                <a href="https://github.com/Francis1240/Homepage">

                <img
                    className="GitHubIcon"
                    src={githublogo} 
                    alt="GitHub repository for this page."
                />
                </a>

            </div>
        </>
    );
}


export default HomeHeader;