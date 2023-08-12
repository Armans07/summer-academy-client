import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/login.jpg';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../../firebase/firebase.config';

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.form?.pathname || '/';

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          title: 'User Login successfull',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate('/');

      })
      .catch(error => {
        console.log('error', error.message);
      });
  };

  const onSubmit = data => {
    console.log(data);
    signIn(data?.email, data?.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login successfull',
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        navigate(form, { replace: true });
      })
      .catch(errors => {
        console.log('error', errors.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full mx-auto p-4">

        <div className=" shadow-xl rounded-lg p-8 md:flex md:flex-row-reverse items-center">
          <div className="md:w-1/2 p-4">
            <h2 className='text-2xl text-center font-semibold lg:hidden'>Login With Join Us !</h2>
            <img src={img} alt="" className="rounded-lg w-full h-full" />
          </div>
          <div className="md:w-1/2 p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <input type="password" name='password' placeholder="password" className="input input-bordered" {...register("password")} />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <div className="form-control mb-2 mt-6">
                <input disabled={false} className='btn btn-primary bg-orange-700 hover:bg-orange-600 hover:text-black' type="submit" value="Login" />

                <p className='mt-1'><small className='mt-2 text-xs font-semibold'>New Here ?  <Link className='text-blue-600' to="/signup">Create an new account</Link></small></p>
                <div className="divider font-semibold">OR</div>
                <div className='mx-auto'>
                  <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline bg-orange-700 hover:bg-orange-600">
                    <p className='text-xl text-gray-300 hover:text-black'>G</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
