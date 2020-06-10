import React from 'react';
import githublogo from '../res/img/GitHub.png'

const grow = {
    flexGrow: 1
};


const homeHeader = () =>{
    return (
        <>
            <div style="display:flex;">
                <div>Yufan Ma</div>
                <div style={grow}></div>
                <img href="https://github.com/Francis1240/Homepage" src={githublogo} alt="GitHub repository for this page."/>
            </div>
        </>
    )
}


export default homeHeader;