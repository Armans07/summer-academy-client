import React from 'react';
import Banner from './Banner/Banner';
import MusicClasses from './MusicClass/MusicClasses';
import PopularInstructors from './PopularInstructor/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MusicClasses></MusicClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;