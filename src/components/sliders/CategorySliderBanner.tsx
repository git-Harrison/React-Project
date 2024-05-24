import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';

const CategorySliderBanner = () => {
    const sliderRef = useRef<Slider>(null);

    const images = [
        { id: 1, path: "/images/main-banner-01.jpg", alt: "1" , title:"키친"},
        { id: 2, path: "/images/main-banner-02.jpg", alt: "2", title:"바스" },
        { id: 3, path: "/images/main-banner-03.jpg", alt: "3", title:"도어" },
        { id: 4, path: "/images/main-banner-04.jpg", alt: "4", title:"중문"},
        { id: 5, path: "/images/main-banner-05.jpg", alt: "5", title:"창호" },
    ];

    const settings = {
        speed: 500,
        slidesToShow: 4.7,
        slidesToScroll: 1,
        infinite: false,
        cssEase: "linear"
    };
  
    // 이미지 로딩이 안되면 에러 콘솔 띄우기
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error(`Failed to load image: ${event.currentTarget.src}`);
        event.currentTarget.alt = "Image not available";  
    };
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
            <div className='sectionn-design'>
                <Slider ref={sliderRef} {...settings}>
                    {images.map((image) => (
                        <div key={image.id}>
                            <img src={image.path} alt={image.alt} onError={handleImageError} />
                            <div className='slider-desc'>
                                <div className='slider-desc__title'>
                                    {image.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default CategorySliderBanner;