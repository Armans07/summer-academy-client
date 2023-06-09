import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { image, name, email } = instructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center">{name} <span className="badge badge-secondary mt-1">POPULAR</span></h2>
                    
                    <p>{email}</p>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default InstructorCard;