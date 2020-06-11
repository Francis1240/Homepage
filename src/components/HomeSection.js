import React from 'react';
import CodeImg from '../res/img/Computer.jpg';
import PhotoImg from '../res/img/SaintPaul.jpg';
import { Link } from 'react-router-dom';

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
                    <Link to="/photographer">
                        <img className="PhotographerBackground" src={PhotoImg} alt="Saint Paul nightview" />
                    </Link>
                );
            case "SDE":
                return (
                    <Link to="/programmer">
                        <img className="ProgrammerBackground" src={CodeImg} alt="A bunch of random code." />
                    </Link>
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