import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';
import { Slide } from 'react-awesome-reveal';
import useClass from '../../../hooks/useClass';

const MusicClasses = () => {

  const [musicClasses] = useClass()
  const popularClasses = musicClasses.filter(item => item.category === 'Popular')

  return (
    <div>
      <Slide>
        <h2 className='text-center my-10 text-3xl font-semibold'>Our Popular Classes</h2>
      </Slide>
      <div className='grid grid-cols-3 gap-2 mb-5'>
        {
          popularClasses?.map(item => <MusicCard
            key={item._id}
            item={item}
          ></MusicCard>)
        }
      </div>
    </div>
  );
};

export default MusicClasses;