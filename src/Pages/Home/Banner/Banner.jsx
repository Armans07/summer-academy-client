import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner1 (1).jpg'
import img2 from '../../../assets/banner1 (2).jpg'
import img3 from '../../../assets/banner1 (3).jpg'

const Banner = () => {
    return (
        <div className='my-10'>
            <Carousel>
                <div>
                    <img src={img1} />
                    <p className="legend">Ready For School</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">WellCome To New</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">School Admission</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;