import React from 'react';
import ImageSliderComponent from "../components/sliders/ImageSliderComponent";
import Header from "../components/layout/Header";
import '../../src/App.scss'
import CategorySliderBanner from '../components/sliders/CategorySliderBanner';
const MainPage = () => {
    return (
        <>
            <Header />
            <ImageSliderComponent />
            <CategorySliderBanner />
        </>
    );
};

export default MainPage;
