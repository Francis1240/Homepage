import React from 'react';
import HomeHeader from '../components/HomeHeader.js';
import HomeSection from '../components/HomeSection.js';

const HomePage = () =>{


    return (
        <>
        <HomeHeader />
        <div className="HomepageSectionsWrapper">
            <div className="HomePageSoftwareSection">
                <HomeSection  name="SDE"/>
            </div>
            <div className="HomePagePhotographerSection">
                <HomeSection  name="Photographer"/>
            </div>
        </div>
        </>
    );
}

export default HomePage;