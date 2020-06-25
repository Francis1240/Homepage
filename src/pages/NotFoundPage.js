import React from 'react';
import NavHeader from "../components/NavHeader";
import NotFound from "../res/img/404.png";
import "../css/NotFoundPage.css";
import { Link } from 'react-router-dom';


const NotFoundPage = () =>{
    return (
        <>
            <NavHeader/>
            <img className="NotFoundPageImage" src={NotFound} alt="404 Page Not Found"/>
            <Link to="/">
                <p className="NotFoundToHome">
                    Homepage
                </p>
            </Link> 
        </>
    );
}


export default NotFoundPage;