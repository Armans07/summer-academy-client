


import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiTwotoneLike } from "react-icons/ai";

const image_hosting_token = import.meta.env.VITE_image_upload_TOKEN

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();

    const { user } = useAuth()

    const { register, handleSubmit, watch, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

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
                    const newClass = { name, instructor, availableSeats, email: user?.email, price: parseFloat(price), image: imgURL }
                    console.log(data, imgURL);
                    navigate(from, { replace: true });
                    form.reset()
                    axiosSecure.post('/addclass', newClass)
                        .then(data => {
                            if (data.data.insertedId) {

                                Swal.fire({
                                    position: 'top-right',
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


    return (
        <div className='p-5'>
            <h2 className='flex justify-center gap-2 text-orange-700 text-3xl font-bold'>Add your new class <AiTwotoneLike></AiTwotoneLike></h2>
            <div className='my-5' data-aos="fade-left" data-aos-duration="1500">
                <form id="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='md:flex gap-5 mb-4'>
                  
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Class Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300" placeholder="Please Class Name"{...register("name")} />
                        </div>

                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Instructor Name</label>
                            <input value={user?.displayName} tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300" placeholder="Instructor Name"{...register("instructor")} />
                        </div>

                    </div>
                    <div className='md:flex gap-5 mb-4'>                    
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Instructor Email</label>
                            <input  value={user?.email} tabIndex={0} arial-label="Please input name" type="name" className="w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300" placeholder="Instructor Name"{...register("instructorEmail")} />
                        </div>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Pick a image file</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered" {...register("image")} />
                        </div>

                    </div>
                    <div className='md:flex gap-5 mb-4'>
                     
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Available Seat</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300" placeholder="Availble Seat"{...register("availableSeats")} />
                        </div>
                       
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Class Price</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-300" placeholder="Class Price"{...register("price")} />
                        </div>
                    </div>
                    <input type="submit" value="Add Class" className='btn btn-block bg-orange-700 text-white hover:bg-orange-600' />
                </form>
            </div>
        </div>
    );
}


export default AddClass;

