import React from 'react';

const MusicCard = ({ item }) => {
    const { image, name, instructor, price, availableSeats } = item;
    return (
        <div className='grid grid-cols-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body text-left">
                    <div className='flex gap-3 align-middle'>
                    <h2 className="card-title">{name}</h2>
                    <span className="badge badge-secondary mt-1">POPULAR</span>
                    </div>
                    <p>Instructor Name: {instructor}</p>
                    <p>Price: ${price}</p>
                    <p>Available Stock: {availableSeats}</p>
                    <div className="card-actions">
                        <button className="btn btn-block">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicCard;