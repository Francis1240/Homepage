import React from 'react';
import CodeImg from '../res/img/Code.jpeg';
import PhotoImg from '../res/img/SaintPaul.jpg';

const HomeSection = (props) =>{

    const RoleTitle = (props) => {
        if(props.name === 'Photographer'){
            return  <p className="PhotographerTitle">Photographer</p>
        }
        return <p className="ProgrammerTitle">Programmer</p>;
    }
    
    const BGImg = (props) =>{
        switch(props.name){
            case "Photographer":
                return (
                    <img className="PhotographerBackground" src={PhotoImg} alt="Saint Paul nightview" />
                );
            case "SDE":
                return (
                    <img className="ProgrammerBackground" src={CodeImg} alt="A bunch of random code." />
                );
            default: 
                return <></>;
        }
    }


    return (
        <>
            <RoleTitle name={props.name}/>
            <BGImg name={props.name} /> 
        </>
    );
}

export default HomeSection;