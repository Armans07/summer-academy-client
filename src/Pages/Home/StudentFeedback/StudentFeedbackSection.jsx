

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'Leo Messi',
            feedback: "I really enjoyed the website course! The hands-on courde and clear explanations helped me grasp the concepts easily.",
            player: 'Football Player',
            image: 'https://static.emisorasunidas.com/uploads/2022/12/messi-balon-de-oro-1.jpg',
        },
        {
            id: 2,
            name: 'Shakib Al Hassan',
            feedback: "The combination of React.js and Tailwind CSS in this course was fantastic. It gave me the skills to create modern and responsive user interfaces.",
            player: 'Cricket Player',
            image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2023/03/14/bacdca20-b066-4f8f-968e-66972d6a2623/Shakib-fielding.jpg',
        },
        {
            id: 3,
            name: 'Alice Johnson',
            feedback: "The interactive exercises were the highlight for me. They made learning React.js and Tailwind CSS an engaging experience.",
            player: 'Basketball Player',
            image: 'https://i.insider.com/604801ae9942cf001865d746?width=1136&format=jpeg',
        },
    ];

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='my-10' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h2 className='text-4xl mt-5 text-orange-700 font-bold text-center'>What Students Say!</h2>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
                {
                    reviews?.map(review => <SwiperSlide
                        key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <div className='flex justify-center items-center gap-x-4'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-orange-700 ring-offset-base-10 ring-offset-2">
                                        <img src={review.image} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-orange-700">{review.name}</h3>
                                    <h3 className='font-semibold'>{review.player}</h3>
                                </div>
                            </div>
                            <p className='py-4'>{review.feedback}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;