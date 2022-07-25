import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

const CommentSection = styled.div`
  display flex;
  padding-left: 2rem;
`;
const Content = styled.span``; 

const CommentBox = styled.div`
  display: flex;
  width: 18rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  margin-left: 1rem;
  margin-right: 2rem;
  padding: 0.8rem;
  background-color: #edf7fa;
  border-radius: 1rem;
  box-sizing: border-box;
`;
const UserName = styled.h2`
  font-weight: bold;
`;
const MenuBtn = styled.a`
  display: flex;
  width: 3rem;
  height: 3rem;
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
  .munuImg {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ProfileImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  &:hover {
    filter: brightness(110%);
  }
`;

const DateNLIke = styled.div`
  display: flex;
  position: absolute;
  gap: 1rem;
  bottom: -1rem;
  color: #808080;
`;

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

const LikeBtn = styled.div`
  border: 0;
  background-color: #edf7fa;
  position: relative;
  
  .Heart {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  animation: ${MovingHeart} 0.3s linear ;
  }
  .redHeart {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 0;
    right: 0;
    color: red;
    animation: ${MovingHeart} 0.3s linear ;
`;
function CommentList({ comment, index }) {
  const [heart, setHeart] = useState(false);
  const handleHeart = () => {
    setHeart(!heart)
  }
  let heartStatus = heart ? (
    <IoHeartSharp heart={heart} className="redHeart" />
  ) : (
    <IoHeartOutline heart={heart} className="Heart" />
  );
  let heartNumber = heart ? (
    <p>좋아요 1개</p>
  ) : ('');
  return (
    <CommentSection>
      <MenuBtn>
        <ProfileImg src="https://cdn.pixabay.com/photo/2016/11/18/15/03/man-1835195_1280.jpg"></ProfileImg>
      </MenuBtn>
      <CommentBox>
        <UserName>관리자</UserName>
        <Content>{comment}</Content>
        <LikeBtn onClick={handleHeart}>{heartStatus}</LikeBtn>
        <DateNLIke>
          <p>Just Now</p>
          {heartNumber}
        </DateNLIke>
      </CommentBox>
    </CommentSection>
  );
}

export default CommentList
