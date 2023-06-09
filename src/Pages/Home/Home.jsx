import React from 'react';
import Banner from './Banner/Banner';
import MusicClasses from './MusicClass/MusicClasses';
import PopularInstructors from './PopularInstructor/PopularInstructors';
import ContactPage from './ContactUs/PhotoGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MusicClasses></MusicClasses>
            <PopularInstructors></PopularInstructors>
            <ContactPage></ContactPage>
        </div>
    );
};

export default Home;