import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Classes = ({ item }) => {
    const { image, name, instructor, price, availableSeats } = item;
    return (
        <div className='grid grid-cols-6'>
            <Zoom>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-left">
                        <div className='flex gap-3 align-middle'>
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <p>Instructor Name: {instructor}</p>
                        <p>Price: ${price}</p>
                        <p>Available Stock: {availableSeats}</p>
                        <div className="card-actions">
                            <button className="btn btn-block">Select</button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Classes;