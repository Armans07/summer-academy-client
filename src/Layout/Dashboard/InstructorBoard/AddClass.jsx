
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const image_hosting_token = import.meta.env.VITE_image_upload_TOKEN

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { user } = useAuth()

    const { register, handleSubmit, watch, reset } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`


    const onSubmit = data => {
       console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
           
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, instructor, availableSeats, price, } = data;
                    const newClass = { name, instructor, availableSeats,email:user?.email, price: parseFloat(price), image: imgURL }
                    console.log(data, imgURL);

                    axiosSecure.post('/addclass', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
                console.log(imgResponse);
            })
    }

    //ANOTHER WAY


    //     fetch("https://summer-champ-server.vercel.app/addclass", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             if (result?.insertedId) {
    //                 Swal.fire({
    //                     title: 'Success!',
    //                     text: 'Class added successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'Cool'
    //                 })
    //             }
    //         })
    //     console.log(data);

    // };

    return (
        <div className='p-5'>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex gap-5 mb-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <label className="input-group">
                                <span>Class Name</span>
                                <input type="text" placeholder="Class Name" className="input input-bordered w-full" {...register("name")}
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <label className="input-group">
                                <span>Instructor name</span>
                                <input value={user?.displayName} type="text" placeholder="Instructor name" className="input input-bordered w-full" {...register("instructor")} />
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
                                <input value={user?.email} type="text" placeholder="Instructor Email" className="input input-bordered w-full" {...register("instructorEmail")} />
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pick a image file</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image")}/>
                        </div>
                    </div>
                    <div className='md:flex gap-5 mb-4'>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Seat</span>
                            </label>
                            <label className="input-group">
                                <span>Seat</span>
                                <input type="number" placeholder="Available Seat" className="input input-bordered w-full" {...register("availableSeats")} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input type="text" placeholder="price" className="input input-bordered w-full" {...register("price")} />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Class" className='btn btn-block' />
                </form>
            </div>
        </div>
    );
}


export default AddClass;

