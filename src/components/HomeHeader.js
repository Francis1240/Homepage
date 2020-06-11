import React from 'react';
import githublogo from '../res/img/GitHub.png';
import HomeIcon from '../res/img/HomeIcon.ico';
import { Link } from "react-router-dom";
  


const HomeHeader = () =>{

    // Stylesheets
    const wrapper = {
        margin: '0',
        background: 'transparent',
        display: 'flex'
    }

    const grow = {
        flexGrow: 1
    };

    const github_icon = {
        margin: '20px 20px 0 0',
        height: '40px',
        width: '40px',
        filter: 'invert(1)'
    }
    
    const home_button = {
        margin: '100px 100px 100px 100px',
        width: '80px' ,
        height: '80px'
    }


    // export
    return (
        <>
            <div style={wrapper}>

                <Link to="/"><img style={home_button} src={HomeIcon}/></Link>
            
                <div style={grow}></div>
                
                <a href="https://github.com/Francis1240/Homepage">
                <img
                    style={github_icon}  
                    src={githublogo} 
                    alt="GitHub repository for this page."
                />
                </a>

            </div>
        </>
    )
}


export default HomeHeader;