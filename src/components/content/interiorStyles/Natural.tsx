import React, {useState} from 'react';
import { Container } from 'react-bootstrap';

interface NaturalProps {
  title: String;
}


const Natural: React.FC<NaturalProps> = ({ title }) => {
  return (
    <div>
      <div className='interior-content'>
        <Container>
            <div className='interior-image'>
                <div className='interior-image__left'>
                    <img src="/images/interior-natural-01.jpg" alt="" />
                    <p className='side-txt'><span>Monochrome Photograph</span>Livingroom</p>
                </div>
                <div className='interior-image__right'>
                    <img src="/images/interior-natural-02.jpg" alt="" />
                    <p className='side-txt'><span>Monochrome Photograph</span>Enterance</p>
                </div>
            </div>
            <div className='interior-image center'>
                <div className='interior-image__center'>
                    <img src="/images/interior-natural-03.jpg" alt="" />
                    <p className='side-txt'><span>Monochrome Photograph</span>Livingroom</p>
                    <p className='desc'>원룸부터 고급주택까지 다양한 형태의 주거공간에 모두 잘 어울리는 모던 스타일을 만나보세요. 꼭 필요한 물건들만 채워 공간에 여백을 주고 간결한 선과 면으로 다듬어진 깔끔한 인테리어를 선보입니다.</p>
                    <p className='subtopic'>{title}</p>
                </div>
            </div>
        </Container>
    </div>
    </div>
  );
};

export default Natural;