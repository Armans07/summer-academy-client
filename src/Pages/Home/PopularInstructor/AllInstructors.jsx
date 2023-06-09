import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';
import InstructorCard from './InstructorCard';

const AllInstructors = () => {

    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('/instructors.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })

    }, [])

    return (
        <div>
        <Slide>
            <h2 className='text-center my-10 text-3xl font-semibold'>Our Popular Instructors</h2>
        </Slide>

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

export default AllInstructors;