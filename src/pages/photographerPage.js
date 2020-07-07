import React from 'react';
import Img0 from '../res/img/Photos/0.JPG';
import Img1 from '../res/img/Photos/1.JPG';
import Img2 from '../res/img/Photos/2.JPG';
import Img4 from '../res/img/Photos/4.JPG';
import Img5 from '../res/img/Photos/5.JPG';
import Img6 from '../res/img/Photos/6.JPG';
import Ins from '../res/img/Instagram.png';
import '../css/PhotographerPage.css';
import Mail from "../res/img/mail-icon.png";
import { Link } from 'react-router-dom';
import downArrow from "../res/img/double-down-arrow.png";


const PhotographerPage = () =>{

    return (
        <div id="photo-wrapper">
            <div id="photo-header">
                <Link to="/">
                    <img id="home" src={downArrow} alt="Go back to home page"/>
                </Link>
                <p>Francis Ma</p>
                <div>
                    <a href="mailto:contactme@yufanma.com"><img src={Mail} alt="Contact me"/></a>
                    <a href="https://www.instagram.com/francis___ma/"><img src={Ins} alt="Instagram"/></a>
                </div>
            </div>
            <div id="pictures">
                <div id="i0">
                    <img src={Img0} alt="Sunset at Bde Maka Ska"/>
                </div>
                <div id="i1">
                    <img src={Img1} alt="Sunset at Bde Maka Ska"/>
                </div>
                <div id="i6">
                    <img src={Img6} alt="Sunset at Bde Maka Ska"/>
                </div>
                <div id="i2">
                    <img src={Img2} alt="Sunset at Bde Maka Ska"/>
                </div>
                <div id="i5">
                    <img src={Img5} alt="Sunset at Bde Maka Ska"/>
                </div>
                <div id="i4">
                    <img src={Img4} alt="Sunset at Bde Maka Ska"/>
                </div>
            </div>

        </div>
    );
}


export default PhotographerPage;