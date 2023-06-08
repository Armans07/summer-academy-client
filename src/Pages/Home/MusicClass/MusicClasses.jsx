import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';

const MusicClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('classes.json')
      .then(res => res.json())
      .then(data => {
        setClasses(data)
      })

  }, [])

  return (
    <div>
      <h2 className='text-center my-10 text-3xl font-semibold'>Popular Classes</h2>
      <div className='grid grid-cols-3 gap-2 mb-5'>
        {
          classes.map(item => <MusicCard
            key={item._id}
            item={item}
          ></MusicCard>)
        }
      </div>
    </div>
  );
};

export default MusicClasses;