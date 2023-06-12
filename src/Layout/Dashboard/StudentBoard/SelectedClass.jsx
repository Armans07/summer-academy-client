import React from 'react';
import useSelected from '../../../hooks/useSelected';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const [selected, refetch] = useSelected();
    const total = selected.reduce((sum, item) => item.price + sum, 0)

    // TODO error 404 not found

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-champ-server.vercel.app/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <div className='font-semibold flex justify-evenly mb-5'>
                <h2 className='text-2xl'>My Selected class: {selected.length}</h2>
                <h2 className='text-2xl'>Selected class Price: ${total}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Enroll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected.map((classes, index) => <tr
                                key={classes._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classes.name}
                                </td>
                                <td>{classes.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(classes)} className="btn btn-ghost btn-xs">Remove</button>
                                </td>
                                <td>
                                    <Link to='/dashboard/payment'><button className="btn btn-ghost btn-xs">PAY</button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default SelectedClass;