import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../Main.css';


const MainPage = () => {
    const handleSlideChange = () => {
        console.log('slide change');
    };
    const handleSwiper = (swiper: typeof Swiper) => {
        console.log(swiper);
    };
    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }
    return (
        <>
            <div className='main-container'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
                </Swiper>
                <div>
                    <img src="logo.svg" alt="" />
                </div>
            </div>
        </>
    );
};

export default MainPage;