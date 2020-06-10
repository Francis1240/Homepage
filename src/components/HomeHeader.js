import React from 'react';
import githublogo from '../res/img/GitHub.png'


const HomeHeader = () =>{
    const grow = {
        flexGrow: 1
    };
    

    return (
        <>
            <div style={{display:'flex'}}>
                <div>Yufan Ma</div>
                <div style={grow}></div>
                <img href="https://github.com/Francis1240/Homepage" src={githublogo} alt="GitHub repository for this page."/>
            </div>
        </>
    )
}


export default HomeHeader;