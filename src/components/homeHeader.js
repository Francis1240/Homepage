import React from 'react';
import githublogo from '../../public/res/img/GitHub.png';


const homeHeader = () =>{
    return (
        <>
            <div style="display:flex;">
                <div>Yufan Ma</div>
                <div style="flex-grow:1;"></div>
                <img href="https://github.com/Francis1240/Homepage" src={githublogo} alt="GitHub repository for this page."/>
            </div>
        </>
    )
}


export default homeHeader;