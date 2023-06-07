import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/banner 3.jpg'
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="hero min-h-screen p-20">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" {...register("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
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