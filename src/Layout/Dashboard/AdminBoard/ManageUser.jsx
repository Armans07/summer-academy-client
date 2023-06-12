
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

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
        <div className="w-full">
            <h2>Managed User {users.length}</h2>
            <div className="w-full">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Instructor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

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

