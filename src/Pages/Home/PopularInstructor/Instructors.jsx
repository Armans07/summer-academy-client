import React from 'react';

const Instructors = ({ allInstructor }) => {
    const { image, name, email } = allInstructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-center">{name}</h2>
                    <p>{email}</p>
                </div>
                <figure><img src={image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Instructors;