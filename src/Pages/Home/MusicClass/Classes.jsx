import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelected from '../../../hooks/useSelected';
import { BsCartCheckFill } from "react-icons/bs";
import AOS from 'aos';

const Classes = ({ item }) => {
    const { _id, image, name, instructor, price, availableSeats } = item;
    const { user } = useContext(AuthContext)
    const [ selected,refetch]= useSelected()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        AOS.init();
      }, [])

    const handleSelecetClass = item => {
        console.log(item);
        if (user && user.email) {
            const selectedItem = { orderItemId: _id, name, image, price, email: user.email }
            fetch('https://summer-champ-server.vercel.app/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-',
                            icon: 'success',
                            title: 'Class Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login Then Selecet Your Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (

        <div className="mx-auto hover:border-y-amber-800">
            <div className=" shadow-xl rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img src={image} alt="Class image" className="rounded-lg h-60 w-96  hover:scale-105" data-aos="fade-down" data-aos-duration="1000"/>
                <div className="p-5" data-aos="fade-up" data-aos-duration="1500">
                    <div className='flex justify-between items-center align-middle gap-2 my-1' >
                        <h3 className="text-gray-900 font-bold text-lg tracking-tight dark:text-white">{name} </h3>
                        <div className='font-extrabold text-orange-700 text-xl'> || </div>
                        <h3 className="text-black font-bold text-lg tracking-tight dark:text-white hover:text-orange-700">{instructor} (Instructor) </h3>
                    </div>
                    <h2 className='font-semibold'>Availbale Seat:  {availableSeats}</h2>
                    <div className="flex items-center justify-between my-1">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <div >
                        <button onClick={() => handleSelecetClass(item)} className="btn text-4xl text-orange-700 hover:text-black hover:bg-orange-400"><BsCartCheckFill></BsCartCheckFill></button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;