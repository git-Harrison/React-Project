import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import '../Main.css';


const MainPage = () => {
    const handleSlideChange = () => {
        console.log('slide change');
    };
    SwiperCore.use([Navigation]);
    const handleSwiper = (swiper: typeof Swiper) => {
        console.log(swiper);
    };
    return (
        <>
            <div className='main-container'>
                <Swiper
                   
                    >
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <SwiperSlide>
                        <img src="thumnail-01.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    
                </Swiper>
                <div>
                    <img src="logo.svg" alt="" />
                </div>
            </div>
        </>
    );
};

export default MainPage;