import React, { useEffect } from 'react';
import useInstructors from '../../../hooks/UseLoadInstructor';
import Instructors from './Instructors';
import { Slide } from 'react-awesome-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllInstructors = () => {
    const [allInstructors] = useInstructors();

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 mt-10' data-aos="zoom-out-up">
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