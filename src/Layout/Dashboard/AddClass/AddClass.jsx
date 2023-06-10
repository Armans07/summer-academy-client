import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:5000/addclass", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        console.log(data);
  
    };

    return (
        <div className='p-5'>
            <h2>Add Class for Instructor</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex gap-5 mb-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <label className="input-group">
                                <span>Class Name</span>
                                <input type="text" placeholder="Class Name" className="input input-bordered w-full" {...register("classname")}
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <label className="input-group">
                                <span>Instructor name</span>
                                <input value={user?.displayName} type="text" placeholder="Instructor name" className="input input-bordered w-full" {...register("instructorname")} />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-5 mb-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <label className="input-group">
                                <span>Email</span>
                                <input value={user?.email} type="text" placeholder="Instructor Email" className="input input-bordered w-full" {...register("instructoremail")} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <label className="input-group">
                                <span>Class Image</span>
                                <input type="text" placeholder="Image" className="input input-bordered w-full" {...register("classimage")} />
                            </label>
                        </div>
                    </div>
                    <div className='md:flex gap-5 mb-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Seat</span>
                            </label>
                            <label className="input-group">
                                <span>Seat</span>
                                <input type="number" placeholder="Available Seat" className="input input-bordered w-full" {...register("availableseat")} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input type="text" placeholder="price" className="input input-bordered w-full" {...register("classprice")} />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Class" className='btn btn-block' />
                </form>
            </div>
        </div>
    );
};

export default AddClass;