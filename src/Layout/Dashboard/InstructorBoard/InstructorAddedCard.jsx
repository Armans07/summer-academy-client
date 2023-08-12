import React, { useEffect } from 'react';
import { MdEventAvailable, MdOutlinePriceChange } from "react-icons/md";
import 'aos/dist/aos.css';
import AOS from 'aos';

const InstructorAddedCard = ({ instructorClass }) => {
    const { image, name, availableSeats, price } = instructorClass;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='flex gap-3 items-center'>
            <div className="flex card w-96 bg-base-100 shadow-xl">
                <figure><img src={image

                } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto text-center mb-5">
                        {name
                        }!
                        <div className="badge badge-secondary bg-orange-700">NEW</div>
                    </h2>
                    <div className="card-actions justify-center gap-24">
                        <div className="badge border-2 border-orange-700 badge-outline font-bold text-lg flex "><MdEventAvailable className='me-1'></MdEventAvailable> {availableSeats}</div>
                        <div className="badge border-2 border-orange-700 badge-outline font-bold text-lg flex  "><MdOutlinePriceChange className='me-1'></MdOutlinePriceChange> ${price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorAddedCard;