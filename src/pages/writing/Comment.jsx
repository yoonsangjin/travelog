import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components'
import CommentList from './CommentList';
import {
  IoChatbubbleEllipsesOutline,
  IoHeartOutline,
  IoMapOutline,
  IoPeople,
  IoEllipsisHorizontalSharp,
  IoArrowRedoOutline,
  IoHeartSharp,
} from 'react-icons/io5';
const CommentContainer = styled.div`
  display: flex;
  width: 26vw;
  height: 100vh;
  height: 100%;
  flex-direction: column;
  padding-top: 1.5rem;
  gap: 2rem;
  border-left: 1px solid #e9e9e9;
  position: fixed;
  right: 0;
  margin-bottm: 5rem;
  overflow: scroll;
`
const CommentStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`
const MovingHeart = keyframes`
  0%{
    transform: scale(0.8);
  }
  25%{
    transform: scale(0.7);
  }
  50%{
    transform: scale(0.8);
  }
  75%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1.0);
  }
`;
const CommentBtn = styled.button`
  border: none;
  background-color: #fff;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  height: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(233, 233, 233, 0.5);
  }
    .icon{
    width: 1.5rem;
    height: 1.5rem;
    }
    .Heart {
  width: 1.5rem;
  height: 1.5rem;
  animation: ${MovingHeart} 0.3s linear ;
  }
  .redHeart {
    width: 1.5rem;
    height: 1.5rem;
    color: red;
    animation: ${MovingHeart} 0.3s linear ;

`;
const MypageImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    filter: brightness(110%);
  }
`;
const ProfileBox = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 2rem;
  justify-content: space-between;
`;
const MenuBtnBox = styled.div`
  display: flex;
  position: relative;
`
const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem 1.5rem 0;
  gap 1rem;
  border-bottom: 1px solid #e9e9e9;
`
const BtnInfo = styled.span`
  display: none;
  height: 1rem;
  position: absolute;
  padding: 0.5rem;
  bottom: -57%;
  left: 50%;
  color: black;
  transform: translate(-50%, 0);
  border-radius: 0.5rem;
  background-color: rgba(237, 247, 250, 0.8);
`;
const MenuBtn = styled.a`
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  position: relative;
  background-color: #5f6caf;
  color: #fff;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: #949dc9;
  }
  &:hover ${BtnInfo} {
    display: block;
  }
  .munuImg {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding-left: 1rem;
`;
const ProfilInfo = styled.div`
  display: flex;
`
const MoreBtn = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  height: 1rem;
`;
const UserName = styled.h2`
  font-weight: bold;
`;
const DateNTime = styled.span`
  font-size: 0.8rem;
  color: #808080;
`;
const ProfileImgBox = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
  border: none;
  position: relative;
  color: #fff;
  text-align: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    filter: brightness(110%);
  }
`;
const CommentFormBox = styled.div`
  padding: 1rem 1rem 3rem 1rem;
  border-radius: 12px;
`;
const CommentForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
`;

const CommentInput = styled.input`
  border-radius: 12px;
  height: 2rem;
`;
const CommentSubmitBtn = styled.button`
  border: red;
  border-radius: 0 12px 12px 0;
  padding: 0.5rem;
  background-color: #fff;
  color: #5f6caf;
  position: absolute;
  font-weight: bold;
  width: 3rem;
  top: 50%;
  left: 90%;
  transform: translate(-50%, -50%);
`;

function Comment() {
    // let data = [];
    // //axios bearer token
    // const token = window.localStorage.getItem('token');
    // let config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
    // //데이터 불러오기
    // const getListData = async () => {
    //   try {
    //     await axios
    //       .get('http://localhost:8000/api/bookmarks', config)
    //       .then(res => (data = res.data));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
  const inputRef = useRef();
  const [value, setValue] = useState('');
  const [commentList, setCommnetList] = useState([]);
  const [heart, setHeart] = useState(false);
  const handleHeart = () => {
    setHeart(!heart);
  };
    // useEffect(() => {
    //   getListData();
    // }, []);
  useEffect(() => {
    inputRef.current.focus();
  }, [value]);
  // like 버튼
  const handleComent  = () => {
    inputRef.current.focus();
  }
  // 사용자로 부터 받아오는 값을 value에 업데이트 
  const getValue = (e) => {
    setValue(e.target.value)
  }
// 사용자로부터 받아오는 값을 commentList에 배열 데이터 추가 & 댓글 초기화
  const addComment = (e) => {
    e.preventDefault();
    inputRef.current.value = '';
    setCommnetList([...commentList, value]);
    setValue('');
  }
    let heartStatus = heart ? (
      <IoHeartSharp heart={heart} className="redHeart" />
    ) : (
      <IoHeartOutline heart={heart} className="Heart" />
    );
  return (
    <CommentContainer>
      <MenuBox>
        <MenuBtnBox>
          <MenuBtn href="/main">
            <IoMapOutline className="munuImg" />
            <BtnInfo>MAP</BtnInfo>
          </MenuBtn>
        </MenuBtnBox>
        <MenuBtnBox>
          <MenuBtn href="/community">
            <IoPeople className="munuImg" />
            <BtnInfo>COMMUNITY</BtnInfo>
          </MenuBtn>
        </MenuBtnBox>
        <MenuBtnBox>
          <MenuBtn href="/mypage">
            <MypageImg src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg"></MypageImg>
            <BtnInfo className="none">MYPAGE</BtnInfo>
          </MenuBtn>
        </MenuBtnBox>
      </MenuBox>
      <ProfileBox>
        <ProfilInfo>
          <ProfileImgBox>
            <ProfileImg src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg"></ProfileImg>
          </ProfileImgBox>
          <InfoBox>
            <UserName>관리자</UserName>
            <DateNTime> 2022년 7월 25일</DateNTime>
          </InfoBox>
        </ProfilInfo>
        <MoreBtn>
          <IoEllipsisHorizontalSharp></IoEllipsisHorizontalSharp>
        </MoreBtn>
      </ProfileBox>
      <CommentStatus>
        <CommentBtn onClick={handleHeart}>
          {heartStatus}
          <p>LIKE</p>
        </CommentBtn>
        <CommentBtn onClick={handleComent}>
          <IoChatbubbleEllipsesOutline className="icon" />
          <p>COMMNET</p>
        </CommentBtn>
        <CommentBtn>
          <IoArrowRedoOutline className="icon" />
          <p>SHARE</p>
        </CommentBtn>
      </CommentStatus>
      {commentList.map((e, index) => {
        return <CommentList comment={e} index={index} />;
      })}
      <CommentFormBox>
        <CommentForm onSubmit={addComment}>
          <CommentInput ref={inputRef} onChange={getValue} type="text" />
          <CommentSubmitBtn>게시</CommentSubmitBtn>
        </CommentForm>
      </CommentFormBox>
    </CommentContainer>
  );
}

export default Comment