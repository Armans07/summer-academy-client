import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div className='mx-auto'>
                <img className='mx-auto' style={{ height: "400px" }} src={errorImg} alt="" />
                <br />
                
                <Link to="/"><button className='btn btn-primary text-center'>Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage; 