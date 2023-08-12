import React from 'react';
import { FaLinkedin, FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6';

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;
    return (

        <div className="mx-auto  rounded-xl shadow-lg overflow-hidden w-full">
        <div className="flex gap-3 items-center p-4">
            <div className="flex-shrink-0 text-center" data-aos="fade-right" data-aos-duration="2000">
                <img className="h-40 w-40 object-cover rounded-full ring ring-orange-700 ring-offset-base-5 ring-offset-5"  src={image}  alt={name}  />
                <span className="badge badge-secondary bg-orange-700 mt-1">POPULAR</span>
            </div>
            <div className="flex flex-col" data-aos="fade-left" data-aos-duration="1500">
                <div className="uppercase tracking-wide text-lg text-orange-700 font-bold">{name}</div>
                <p className="mt-2 text-black">{email}</p>
                <div className='mt-2 flex gap-2'>
                    <p className='text-orange-700 text-3xl'><FaLinkedin></FaLinkedin></p>
                    <p className='text-orange-700 text-3xl'><FaSquareInstagram></FaSquareInstagram></p>
                    <p className='text-orange-700 text-3xl'><FaSquareTwitter></FaSquareTwitter></p>
                </div>
            </div>
        </div>
    </div>
        
    );
};

export default InstructorCard;