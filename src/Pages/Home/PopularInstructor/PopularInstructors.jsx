import React from 'react';
import InstructorCard from './InstructorCard';
import { Slide } from "react-awesome-reveal";
import useInstructors from '../../../hooks/UseInstructor';

const PopularInstructors = () => {
  const [popularInstructors] = useInstructors();
  const instructors = popularInstructors.filter(item => item.category === 'Popular');

  return (
    <div>
      <Slide>
        <h2 className='text-center my-10 text-3xl font-semibold'>Our Popular Instructors</h2>
      </Slide>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 my-10'>
        {instructors.map(instructor => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
