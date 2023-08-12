
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import AOS from 'aos';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    useEffect(() => {
        AOS.init();
    }, [])

    const handleMakeAdmin = (user) => {
        fetch(`https://summer-champ-server.vercel.app/users/admin/${user._id}`, {
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
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`https://summer-champ-server.vercel.app/users/instructor/${user._id}`, {
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
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="w-full my-5">
            <h2 className='text-center text-3xl font-bold text-orange-700'>Total user: {users.length}</h2>
            <div className="w-full">
                <div className="overflow-x-auto p-2" data-aos="fade-left" data-aos-duration="1500">
                    <table className="table rounded-xl">
                        <thead className='bg-orange-400 text-lg font-semibold'>
                            <tr className='font-semibold text-black'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-orange-300 font-semibold text-sm' >
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    <div className='flex justify-center items-center'>
                                    <td>
                                        {user.role === 'instructor' ? (
                                            <div className="badge badge-neutral">Instructor</div>
                                        ) : (
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost btn-sm">
                                                Instructor
                                            </button>
                                        )}
                                    </td>
                                    
                                    <td>
                                            {user.role === 'admin' ? (
                                                <div className="badge badge-neutral">Admin</div>
                                            ) : (
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm">
                                                    Admin
                                                </button>
                                            )}
                                        </td>
                                    </div>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;

