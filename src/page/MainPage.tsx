import React from 'react';
import '../../src/App.scss'
import ImageSliderComponent from "../components/sliders/ImageSliderComponent";
import CategorySliderBanner from '../components/sliders/CategorySliderBanner';
import InteriorStyles from '../components/content/interiorStyles/InteriorStyles';
import ContainerBanner from '../components/content/ContainerBanner/ContainerBanner';

const MainPage = () => {
    return (
        <>
            <ImageSliderComponent />
            <CategorySliderBanner />
            <InteriorStyles />
            <ContainerBanner />
        </>
    );
};

export default MainPage;
