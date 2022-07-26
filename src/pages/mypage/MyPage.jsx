import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// import axios from 'axios'
// 작성된 글들을 가져오는 작업을 하기 위해 axios 사용할 예정
const MyPage = () => {
  const [Image, setImage] = useState('img/default.png');
  return (
    <Page>
      <MyPageHeader>
        <Profile>
          <Img src={Image} />
          <UserName>username</UserName>
          <MyInfo>
            <MyInfoBox>
              <p>내 여행</p>
              <MyLog>3</MyLog>
            </MyInfoBox>
            <MyInfoBox>
              <p>여행글</p>
              <MyLog>3</MyLog>
            </MyInfoBox>
            <MyInfoBox>
              <p>컬러로그</p>
            </MyInfoBox>
          </MyInfo>
        </Profile>
      </MyPageHeader>
      <Feed>
        <ImgFeed src="img/airport.jpg" />
        <ImgFeed src="img/beach.jpg" />
        <ImgFeed src="img/hamburg.jpg" />
        <ImgFeed src="img/people.jpg" />
        <ImgFeed src="img/avatar.jpg" />
      </Feed>
    </Page>
  );
};

export default MyPage;

const Page = styled.div`
  width: 60vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
`;
const MyPageHeader = styled.div`
  display: flex;
  justify-content: column;
  width: 60vw;
`;

const Profile = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
`;

const MyInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1rem;
`;
const MyLog = styled.p`
  display: flex;
  background-color: white;
  width: 2rem;
  border-radius: 1rem;
  justify-content: center;
  height: 2rem;
  position: relative;
`;
const UserName = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
`;
const MyInfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  height: 5vh;
  margin-top: 1rem;
  background-color: #edf7fa;
  line-height: 5vh;
  border-radius: 1rem;
  border: none;
  font-size: 2rem;
`;

const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 25px 25px;
  border-top: 1px solid lightgrey;
  padding-top: 3rem;
`;

const ImgFeed = styled.img`
  width: 19vw;
  height: 25vh;
  align-items: stretch;
  box-sizing: border-box;
  object-fit: fill;
`;
