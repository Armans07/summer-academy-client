import React from 'react';
import Banner from './Banner/Banner';
import MusicClasses from './MusicClass/MusicClasses';
import PopularInstructors from './PopularInstructor/PopularInstructors';
import StudentFeedbackSection from './StudentFeedback/StudentFeedbackSection';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import AboutSection from './AboutUs/AboutSection';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MusicClasses></MusicClasses>
            <StudentFeedbackSection></StudentFeedbackSection>
            <PopularInstructors></PopularInstructors>
            <PhotoGallery></PhotoGallery>
            <AboutSection></AboutSection>

        </div>
    );
};

export default Home;