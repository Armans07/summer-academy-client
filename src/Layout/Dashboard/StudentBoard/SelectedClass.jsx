import React, { useEffect } from 'react';
import useSelected from '../../../hooks/useSelected';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { IoBagRemove } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import AOS from 'aos';

const SelectedClass = () => {
    const [selected, refetch] = useSelected();
    const total = selected.reduce((sum, item) => item.price + sum, 0)

    useEffect(() => {
        AOS.init();
    }, [])

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
        <div className='w-full p-1 my-2'>
            <div className='font-semibold flex justify-evenly mb-5'>
                <h2 className='text-2xl text-orange-700' data-aos="fade-right">Selected class: {selected.length} </h2>
                <h2 className='text-2xl text-orange-700' data-aos="fade-left">Total Price: ${total}</h2>
            </div>
            <hr />
            <div className="overflow-x-auto mt-5" data-aos="fade-left" data-aos-duration="1500">
                <table className="table rounded-xl">
                    <thead className='bg-orange-400 text-lg font-semibold'>
                        <tr className='font-semibold text-black'>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Enroll</th>
                        </tr>
                    </thead>
                    <tbody className='bg-orange-300 font-semibold text-sm'>
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
                                <td>${classes.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(classes)} className="btn btn-ghost hover:bg-orange-300"><IoBagRemove className='text-orange-700 text-2xl'></IoBagRemove></button>
                                </td>
                                <td>
                                    <Link to='/dashboard/payment'><button className="btn btn-ghost hover:bg-orange-300"><MdPayment className='text-orange-700 text-2xl'></MdPayment></button></Link>
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