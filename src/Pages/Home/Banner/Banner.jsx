import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/debby-hudson-asviIGR3CPE-unsplash.jpg'
import img2 from '../../../assets/deleece-cook-zzjLGF_6dx4-unsplash.jpg'
import img3 from '../../../assets/element5-digital-7K_agbqPqYo-unsplash.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto my-10'>
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