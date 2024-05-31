import React, {useRef} from 'react';
import { Container } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const CategorySliderBanner = () => {
    
// Swiper 모듈 초기화
    // const sliderRef = useRef<Slider>(null);

    
  
    // 이미지 로딩이 안되면 에러 콘솔 띄우기
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error(`Failed to load image: ${event.currentTarget.src}`);
        event.currentTarget.alt = "Image not available";  
    };
     const images = [
        { id: 1, path: "/images/img-kitchen.jpg", alt: "키친" , title:"키친"},
        { id: 2, path: "/images/img-bath.jpg", alt: "바스", title:"바스" },
        { id: 3, path: "/images/img-door.jpg", alt: "도어", title:"도어" },
        { id: 4, path: "/images/img-interlockingDoor.jpg", alt: "중문", title:"중문"},
        { id: 5, path: "/images/img-window.jpg", alt: "창호", title:"창호" },
        { id: 6, path: "/images/img-wallFinish.jpg", alt: "몰딩/월/마루", title:"몰딩/월/마루"},
        { id: 7, path: "/images/img-film.jpg", alt: "인테리어 필름", title:"인테리어 필름" },
        { id: 8, path: "/images/img-built-in-closet.jpg", alt: "붙박이장", title:"붙박이장" },
    ];
    return (
        <>
            <Container>
                <div className='section design-textbox'>
                    <div className="design-textbox__title">
                        다양한 라이프스타일 속에서 최적화된 
                        당신의 주거 공간을 디자인합니다.<br />
                        가치 있는 당신의 일상을 위한 취향에
                        딱 맞는 인테리어 디자인을 만나보세요.
                    </div>
                    <div className="design-textbox__desc">
                        Lifestyle design beyond material
                    </div>
                </div>
            </Container>
           <div className="section-design">
            <Swiper
                spaceBetween={32}
                slidesPerView={4.5}
                navigation
            >
                {images.map((image) => (
                <SwiperSlide key={image.id}>
                    <img src={image.path} alt={image.alt} onError={handleImageError} />
                    <div className='slider-desc'>
                        <div className='slider-desc__title'>
                            {image.title}
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </>
    );
};

export default CategorySliderBanner;