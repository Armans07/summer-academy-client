import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <Carousel className='text-center mx-auto '>
                <div>
                    <img className='' src={img1} />
                    <p className="legend mt-10">Ready For Selection</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">WellCome To Our Center</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Come and go with good health</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;