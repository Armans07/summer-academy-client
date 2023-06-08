import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/banner 3.jpg'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


   
    const onSubmit = data => {
        console.log(data)
        signIn(data?.email, data?.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login successfull',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
            navigate(from,{replace: true});
        })

    };

    return (
        <div>
            <h2>Login Page</h2>
            <form  onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen p-20">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" {...register("email")}/>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" {...register("password")}/>

                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mb-2 mt-6">
                                <input disabled={false} className='btn btn-primary' type="submit" value="Login" />

                                <p><small>New Here ? <Link to="/signup">Create an new account</Link></small></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">

                        <img src={img} alt="" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;