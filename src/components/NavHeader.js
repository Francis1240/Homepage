import React from 'react';
import githublogo from '../res/img/GitHub.png';
import HomeIcon from '../res/img/HomeIcon.ico';
import "../css/NavHeader.css";
import { Link } from 'react-router-dom';


const NavHeader = () => {


    return (
        <>
            <div className="NavHeaderWrapper">

            <Link to="/" className="HomeButton">
                    <img src={HomeIcon} className="HomeButtonIcon" alt="Home Button."/>
            </Link>
        

            <ul className="NavBarWrapper">
                <li>

                </li>

                <li>

                </li>
            </ul>
            <a href="https://github.com/Francis1240/Homepage">
                <div>
                    <p className="GitHubIconAbout"> About This Site </p>

                    <img
                        className="GitHubIcon-nav"
                        src={githublogo} 
                        alt="GitHub repository for this page."
                />
                </div>
            </a>

            </div>
        </>
    );
}

export default NavHeader;