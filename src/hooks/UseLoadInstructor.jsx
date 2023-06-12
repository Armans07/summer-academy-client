import React, { useEffect, useState } from 'react';

const UseLoadInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading,setLoading]= useState(true)
    useEffect(() => {
        fetch('https://summer-champ-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                setLoading(false)
            })

    }, [])
    return [instructors,loading]
};

export default UseLoadInstructor;