import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h2>Sign Up here</h2>
            <form className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Here!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-600'>Name must required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" className="input input-bordered" {...register("photoURL", { required: true })} />
                                {errors.photoURL && <span className='text-red-600'>Name must required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className='text-red-600'>Email must required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" {...register("password", { required: true, minLength: 6, maxLength: 20 }, { pattern: /^[A-Za-z]+$/i })} />
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must less then 20 characters</span>}
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign Up" />
                                <p><small>Have an account ? <Link to="/login">Pleaser login</Link></small></p>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;