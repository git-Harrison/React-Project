import React from 'react';
import '../../src/App.scss'
import ImageSliderComponent from "../components/sliders/ImageSliderComponent";
import Header from "../components/layout/Header";
import CategorySliderBanner from '../components/sliders/CategorySliderBanner';
import InteriorStyles from '../components/content/interiorStyles/InteriorStyles';

const MainPage = () => {
    return (
        <>
            <Header />
            <ImageSliderComponent />
            <CategorySliderBanner />
            <InteriorStyles />
        </>
    );
};

export default MainPage;
