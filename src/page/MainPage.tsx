import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const MainPage = () => {
    const handleSlideChange = () => {
        console.log('slide change');
    };

    const handleSwiper = (swiper: typeof Swiper) => {
        console.log(swiper);
    };
    
    return (
        <>
            <div className='main-container'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={handleSlideChange}
                    onSwiper={handleSwiper}
                    >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default MainPage;