import React from 'react';
import ProgrammerAboutPage from './ProgrammerAboutPage';
import bg from "../res/img/Computer.jpg";
import "../css/ProgrammerPage.css";
import myPhoto from "../res/img/Me.JPG";
import { Link } from 'react-router-dom';
const ProgrammerPage = () =>{
    return (
        <>  
            <img id="ProgrammerPageBackground" src={bg} alt="Background"/>
            <div id="ProgrammerPageWrapper">
                <div id="header">
                    <img id="header-photo" src={myPhoto} alt="Yufan Ma"/>
                    <Link to="/programmer/about">
                        <button id="about-button">About Me </button>
                    </Link>
                    <p>AWS Certified DevOps Engineer (Professional)</p>
                </div>
            </div>
        </>
    );
}


export default ProgrammerPage;