import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import img from '../../../assets/signUp.jpg'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Result } from 'postcss';
import Swal from 'sweetalert2';


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()


    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password, data.photoURL)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://summer-champ-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: 'User create successfull',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                    navigate('/')

                                }
                            })
                        reset()


                    })
                    .catch(error => console.log(error))
            })


    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen p-20">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.name && <span>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 12, pattern: /^(?=.*[A-Z])/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p>Password must 6 characters</p>}
                                {errors.password?.type === 'pattern' && <p>Password must one uppercase</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmpassword' placeholder="confirm password" className="input input-bordered" {...register("confirmpassword", { required: true })} />
                                {errors.confirmpassword && <span>Confirmation password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="photoURL" name='photoURL' placeholder="Photo URL" className="input input-bordered" {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span>Photo URL is required</span>}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mb-2 mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign Up" />

                                <p><small>Have an account ? <Link to="/login">Please login</Link></small></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">

                        <img src={img} alt="" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;