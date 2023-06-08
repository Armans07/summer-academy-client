import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div className='mx-auto'>
                <img className='mx-auto' style={{ height: "400px" }} src={errorImg} alt="" />
                <br />
                <button className='btn btn-info text-center text-decoration-none text-white'><Link to='/'>Back To Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage; 