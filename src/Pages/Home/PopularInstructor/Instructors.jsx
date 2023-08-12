import { signInWithEmailLink } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaSquareInstagram, FaSquareTwitter, FaTwitter } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instructors = ({ allInstructor }) => {
    const { image, name, email } = allInstructor;
    

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-center font-semibold text-orange-700 ">{name}</h2>

                <p className='font-semibold text-sm'>{email}</p>
            </div>
            <figure><img src={image} alt={name} data-aos="fade-up" data-aos-duration="1500"/></figure>
        </div>
    </div>
    );
};

export default Instructors;

