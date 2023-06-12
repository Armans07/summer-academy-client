import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

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
        <div className='w-full'>
            <h2>Instructor added {instructorClasses.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pending</th>
                            <th>Approved</th>
                            <th>Denied</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.map((instructorClass, index) => <tr
                                key={instructorClass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructorClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {instructorClass.name}
                                </td>
                                <td>{instructorClass.price}</td>
                                <td>
                                    <button  className="btn btn-ghost btn-xs">Pending</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Approved</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Denied</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Feedback</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default InstructorAdded;