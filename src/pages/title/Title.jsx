import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TitleCard from '../../components/TitleCard'
import videoBG from './video/background.mp4'
import SearchbarIntro from '../../components/SearchbarIntro'
import { useRecoilState } from 'recoil'
import { loginState } from '../../recoil/Atom'

const mockData = [
  {
    id: 1,
    place: '제주도',
    img: 'https://cdn.pixabay.com/photo/2019/06/11/07/36/shiroyama-hiji-peak-4266254_1280.jpg',
  },
  {
    id: 2,
    place: '부산',
    img: 'https://cdn.pixabay.com/photo/2016/10/17/07/53/busan-night-scene-1747130_1280.jpg',
  },
  {
    id: 3,
    place: '양양',
    img: 'https://cdn.pixabay.com/photo/2019/06/11/07/36/shiroyama-hiji-peak-4266254_1280.jpg',
  },
  {
    id: 4,
    place: '목포',
    img: 'https://cdn.pixabay.com/photo/2019/06/11/07/36/shiroyama-hiji-peak-4266254_1280.jpg',
  },
];

function Title() {
  const [isloggedIn] = useRecoilState(loginState);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    if (localStorage.getItem('token')) console.log('exist!');
  }, []);
  const scrolling = () => {
    const viewHight = window.innerHeight;
    window.scrollTo({
      top: viewHight,
      left: 0,
      behavior: 'smooth',
    });
  };
  const clickSearch = () => {
    window.location.href = `/main?place=${inputValue}`;
  };
  const inputSearch = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <TitleContainer>
        <TitleSection>
          <Img src="img/travelog.jpg" />
          <TitleButton onClick={scrolling}>시작하기</TitleButton>
        </TitleSection>
        <VideoContainer>
          <Video src={videoBG} autoPlay loop muted />
          {/* <ReactPlayer
						url="https://www.youtube.com/embed/7BV6WKM8Gp4"
						playing={true}
						muted={true}
						controls={false}
						pip={false}
						loop={true}
						light={false}
					/> */}
        </VideoContainer>
      </TitleContainer>
      <SearchSection>
        <SearchbarIntro
          title="어디로 떠나세요?"
          inputWidth="30rem"
          containerWidth="50rem"
          value={inputValue}
          clickMethod={clickSearch}
          changeMethod={inputSearch}
        />
        <CardContainer>
          {mockData.map(i => {
            return <TitleCard key={`Title-card-${i.id}`} place={i.place} img={i.img} />;
          })}
        </CardContainer>
      </SearchSection>
    </div>
  );
}

export default Title

const TitleContainer = styled.div`
  width: 100vw;
  hegith: 100vh;
  display: flex;
`;

const TitleSection = styled.section`
  width: 35vw;
  height: 100vh;
  background-color: #fff;
`;
const TitleButton = styled.button`
  display: block;
  width: 10rem;
  height: 4rem;
  background-color: #5f6caf;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
  line-height: 4rem;
  border: none;
  position: relative;
  top: 40vh;
  left: calc(17.5vw - 5rem);
`;

const VideoContainer = styled.section`
  width: 65vw;
  height: 100vh;
  overflow: hidden;
`;
const Video = styled.video`
  width: 120%;
  height: 105%;
  object-fit: cover;
  position: relative;
  top: -0.1rem;
`;
const SearchSection = styled.section`
  width: 100vw;
  height: 100vh;
`;

const CardContainer = styled.div`
  width: 50rem;
  height: 20rem;
  position: relative;
  top: 25vh;
  left: calc(50vw - 25rem);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1fr;
`;

const Img = styled.img`
  width: 15rem;
  height: 7rem;
  position: relative;
  top: 35vh;
  left: calc(17.5vw - 7.5rem);
`;