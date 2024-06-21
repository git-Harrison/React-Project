import React, { useEffect } from 'react';
import './App.css';
import Router from "./routes/Router";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일시트 가져오기


function App() {
    useEffect(() => {
        AOS.init({
          duration: 2000, // 애니메이션 지속 시간
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    );
}

export default App;
