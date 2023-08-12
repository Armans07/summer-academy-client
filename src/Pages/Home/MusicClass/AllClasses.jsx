import React from 'react';
import Classes from './Classes';
import useClass from '../../../hooks/useClass';

const AllClasses = () => {

    const [allClasses]=useClass()

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 mt-10 mx-auto  '>
            {
                allClasses?.map(item => <Classes
                    key={item._id}
                    item={item}
                ></Classes>)
            }
        </div>
    );
};
export default AllClasses;