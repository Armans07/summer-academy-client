import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageClasses = () => {
    const { user } = useAuth();
    const [managedClasses, setManagedClasses] = useState([]);

    useEffect(() => {
        fetch(`https://summer-champ-server.vercel.app/loadedclass/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    }, [user])




    const handleApprovedClass = (classes) => {
        fetch(`https://summer-champ-server.vercel.app/class/approved/${classes._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${classes.name} Class Approved !`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };


    const handleDeniedClass = (classes) => {
        fetch(`https://summer-champ-server.vercel.app/class/denied/${classes._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${classes.name} Class Denied !`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };




    return (
        <div className='w-full'>
            <h2>managed added {managedClasses.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Availble Seats</th>
                            <th>Pending</th>
                            <th>Apporved</th>
                            <th>Denied</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managedClasses.map((managedClass, index) => <tr
                                key={managedClass._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={managedClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {managedClass.name}
                                </td>
                                <td>{managedClass.instructor}</td>
                                <td>{managedClass.instructorEmail}</td>
                                <td>{managedClass.availableSeats}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Pending</button>
                                </td>
                                <td>
                                    {managedClass.role === 'apporved' ? (
                                        <div className="badge badge-neutral">Approved</div>
                                    ) : (
                                        <button onClick={() => handleApprovedClass(managedClass)} className="btn btn-ghost btn-sm">
                                            Approved
                                        </button>
                                    )}
                                </td>

                                <td>
                                    {managedClass.role === 'denied' ? (
                                        <div className="badge badge-neutral">Denied</div>
                                    ) : (
                                        <button onClick={() => handleDeniedClass(managedClass)} className="btn btn-ghost btn-sm">
                                            Denied
                                        </button>
                                    )}
                                </td>
                                {/* <td>
                                    <button className="btn btn-ghost btn-xs">Approved</button>
                                </td> */}
                                {/* <td>
                                    <button className="btn btn-ghost btn-xs">Denied</button>
                                </td> */}

                                
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

export default ManageClasses;