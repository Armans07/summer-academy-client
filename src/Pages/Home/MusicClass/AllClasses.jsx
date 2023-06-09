import React, { useEffect, useState } from 'react';
import Classes from './Classes';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div className='grid grid-cols-3 gap-2 mb-5'>
            {
                classes?.map(item => <Classes
                    key={item._id}
                    item={item}
                ></Classes>)
            }
        </div>
    );
};
export default AllClasses;