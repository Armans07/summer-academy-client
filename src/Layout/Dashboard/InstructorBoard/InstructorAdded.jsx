import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import InstructorAddedCard from './InstructorAddedCard';

const InstructorAdded = () => {
    const { user } = useAuth();
    const [instructorClasses, setInstructorClasses] = useState([]);

    useEffect(() => {
        fetch(`https://summer-champ-server.vercel.app/addclass/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setInstructorClasses(data)
            });
    }, [user])

    return (
        <div >
            <h2 className='text-3xl text-center font-bold mt-5 text-orange-700'>My new class : {instructorClasses.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-2' data-aos="fade-left" data-aos-duration="1500">
                {instructorClasses.map(instructorClass => (
                    <InstructorAddedCard key={instructorClass._id} instructorClass={instructorClass} />
                ))}
            </div>
        </div>
    );
};

export default InstructorAdded;