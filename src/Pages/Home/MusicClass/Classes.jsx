import React, { useContext } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelected from '../../../hooks/useSelected';

const Classes = ({ item }) => {
    const { _id, image, name, instructor, price, availableSeats } = item;
    const { user } = useContext(AuthContext)
    const [, refetch]= useSelected()
    const navigate = useNavigate()
    const location = useLocation()


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
        <div className='grid grid-cols-6'>
            <Zoom>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-left">
                        <div className='flex gap-3 align-middle'>
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <p>Instructor Name: {instructor}</p>
                        <p>Price: ${price}</p>
                        <p>Available Stock: {availableSeats}</p>
                        <div className="card-actions">
                            <button onClick={() => handleSelecetClass(item)} className="btn btn-block">Select</button>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Classes;