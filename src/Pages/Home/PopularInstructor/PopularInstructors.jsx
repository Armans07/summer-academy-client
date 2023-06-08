import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const PopularInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })

    }, [])
    return (
        <div>
            <h2 className='text-center my-10 text-3xl font-semibold'>Our Popular Instructors</h2>
            <div className='grid grid-cols-3 gap-2 my-10'>
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;