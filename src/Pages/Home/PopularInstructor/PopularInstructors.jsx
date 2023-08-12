import React, { useEffect } from 'react';
import InstructorCard from './InstructorCard';
import 'aos/dist/aos.css';
import AOS from 'aos';
import UseLoadInstructor from '../../../hooks/UseLoadInstructor';

const PopularInstructors = () => {
  const [popularInstructors] = UseLoadInstructor();
  const instructors = popularInstructors.filter(item => item.category === 'Popular');
  useEffect(() => {
    AOS.init();
}, [])

  return (
    <div className='mt-16'>
      
      <h4 className='text-center text-2xl italic font-semibold'>Our Instructor</h4>
      <h2 className='mb-5 text-orange-700 underline text-center text-4xl font-semibold' data-aos="fade-left" data-aos-duration="1500" > Most Popular Instructor</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10' data-aos="fade-right"
     data-aos-duration="3000">
        {instructors.map(instructor => (
          <InstructorCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
