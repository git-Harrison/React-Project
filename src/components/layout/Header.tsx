import React from 'react';

const Header = () => {
  return (
    <>
        <header className='header'>
            <div className="header-inner">
                <a href="" className='logo'>
                    <img src="/images/logo-w.png" alt="" />
                </a>
                <ul className='gnb'>
                    <li>
                        <a href="">브랜드</a>
                    </li>
                    <li>
                     <a href="">제품</a>
                    </li>
                    <li>
                        <a href="">인테리어 솔루션</a>
                    </li>
                </ul>
            </div>
        </header>
    </>
  );
};

export default Header;