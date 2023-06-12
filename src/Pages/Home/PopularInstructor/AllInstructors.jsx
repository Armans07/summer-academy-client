import React, { useEffect, useState } from 'react';
import useInstructors from '../../../hooks/UseLoadInstructor';
import Instructors from './Instructors';
import { Slide } from 'react-awesome-reveal';

const AllInstructors = () => {
    const [allInstructors] = useInstructors();

    return (
        <div>
            <Slide>
                <h2 className='text-center my-10 text-3xl font-semibold'>Our Popular Instructors</h2>
            </Slide>

            <div className='grid grid-cols-3 gap-2 my-10 mx-auto'>
                {
                    allInstructors.map(allInstructor => <Instructors 
                    key={allInstructor._id}
                    allInstructor={allInstructor}
                    ></Instructors>)
                }
            </div>
        </div>
    );
};

export default AllInstructors;