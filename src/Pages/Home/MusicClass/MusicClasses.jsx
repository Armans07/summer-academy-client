
import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';
import useClass from '../../../hooks/useClass';
import AOS from 'aos';

const MusicClasses = () => {
  const [musicClasses] = useClass();
  const popularClasses = musicClasses.filter(item => item.category === 'Popular');

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='mb-5 mt-14'>
      <h4 className='text-center italic text-2xl font-semibold'>Our Classes</h4>
      <h2 className='mb-5 text-orange-700 underline text-center text-4xl font-semibold' data-aos="fade-right" data-aos-duration="1500" > Most Popular Classes</h2>
      <div data-aos="fade-left"
        data-aos-duration="3000" className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 mt-10'>
        {popularClasses?.map(item => (
          <MusicCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MusicClasses;
