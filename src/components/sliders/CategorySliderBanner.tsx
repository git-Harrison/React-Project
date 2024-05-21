import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategorySliderBanner = () => {
  return (
    <div className="category-container">
        <div className="content">
            <h2>다양한 라이프스타일 속에서 최적화된 당신의 주거 공간을 디자인합니다.</h2>
            <p>가치 있는 당신의 일상을 위한 취향에 딱 맞는 인테리어 디자인을 만나보세요.</p>
            <p>Lifestyle design beyond material</p>
        </div>
        <div className="gallery">
            <div className="gallery-item">
                <img src="" alt="키친" />
                <p>키친</p>
            </div>
            <div className="gallery-item">
                <img src="" alt="바스" />
                <p>바스</p>
            </div>
            <div className="gallery-item">
                <img src="" alt="도어" />
                <p>도어</p>
            </div>
            <div className="gallery-item">
                <img src="" alt="중문" />
                <p>중문</p>
            </div>
            <div className="gallery-item">
                <img src="" alt="창호" />
                <p>창호</p>
            </div>
        </div>
    </div>
  );
};

export default CategorySliderBanner;