import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSliderComponent: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const images = [
        {id: 1, path: "path/to/your/image1.jpg", alt: "1"},
        {id: 2, path: "path/to/your/image2.jpg", alt: "2"},
        {id: 3, path: "path/to/your/image3.jpg", alt: "3"},
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const next = () => {
        sliderRef.current?.slickNext();
    };

    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    return (
        <div>
            <h2>이미지 슬라이드 테스트</h2>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.path} alt={image.alt}/>
                    </div>
                ))}
            </Slider>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default ImageSliderComponent;


