import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutSection = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="shadow-lg my-14 p-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:order-1">
                        <h2 className="text-3xl text-orange-700 font-bold mb-4">About Our Sports Academy</h2>
                        <div className='mt-2 font-semibold text-sm' data-aos="fade-right" data-aos-duration="1000" >
                            <p className="text-gray-700 mb-6">
                                Our academy is dedicated to promoting physical fitness, teamwork, and skill development
                                through a wide range of sports programs. We offer professional coaching and top-notch
                                facilities to help our athletes reach their full potential.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Whether you're a beginner looking to explore a new sport or an experienced athlete
                                striving for excellence, our academy provides a supportive and challenging environment
                                to help you achieve your goals.
                            </p>
                            <p className="text-gray-700 mb-6">
                                Join us in the journey of discovering your passion for sports and unlocking your true
                                potential. Let's work together to create a healthier, more confident, and successful you!
                            </p>
                        </div>
                    </div>
                    <div className="md:order-2" data-aos="fade-left" data-aos-duration="1000">
                        <img
                            src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik"
                            alt="Sports Academy"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
