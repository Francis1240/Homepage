import React from 'react';
import HomeHeader from '../components/HomeHeader.js';
import HomeSection from '../components/HomeSection.js';

const HomePage = () =>{
    
    return (
        <>
        <HomeHeader />

        <h1 id="HomepageTitle">
        
        </h1>

        <div id="HomepageSectionsWrapper">
            <HomeSection name="Photographer"/>
            <HomeSection name="SDE"/>
        </div>
        </>
    );
}

export default HomePage;