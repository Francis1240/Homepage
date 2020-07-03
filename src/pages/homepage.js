import React from 'react';
import HomeHeader from '../components/HomeHeader.js';
import HomeSection from '../components/HomeSection.js';
import "../css/Homepage.css";

class HomePage extends React.Component {


    
    constructor(props){
        super(props);
        this.left = React.createRef();
        this.activateLeft = this.activateLeft.bind(this);
        this.deactivateLeft = this.deactivateLeft.bind(this);
    }

    activateLeft(e){
        e.preventDefault();
        this.left.current.className += " activated";
    }
    deactivateLeft(e){
        e.preventDefault();
        this.left.current.className = this.left.current.className.replace(" activated", '');
    }

    render (){
        return (
        <>
            <HomeHeader />
                <div className="HomepageSectionsWrapper">
                    <div className="HomepageProgrammerSection">
                        <HomeSection  name="SDE"/>
                    </div>
                    <div 
                        ref={this.left} 
                        className="HomepagePhotographerSection" 
                    >
                        <HomeSection  name="Photographer"/>
                    </div>
                </div>
        </>
        );
    };

}

export default HomePage;