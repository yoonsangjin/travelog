import React from 'react';
import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import { boardState } from '../../recoil/Atom.jsx';
import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';
const ListBox = styled.div`
  flex: 0 0 auto;
  padding: 1rem;
  position: relative;
  border-radius: 1px;
  background-color: #edf7fa;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
const ListHeader = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;
const Closebtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: red;
  }
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  .close {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 1.5rem;
    height: 1.5rem;
  }
`
const LinkToURL = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;
function WritingBoardList({ bookmarkId, placeName, placeUrl, bookmarkMemo, categoryGroupName }) {
  const [board, setBoard] = useRecoilState(boardState);
  const handleButton = () => {
    const newArr = board.filter(e => bookmarkId !== e.bookmarkId);
    setBoard(newArr);
  };
  let category;
  switch (categoryGroupName) {
    case '카페':
      category = <IoMdCafe className="icon" />;
      break;
    case '음식점':
      category = <BiRestaurant className="icon" />;
      break;
    default:
      category = <ImLibrary className="icon" />;
  }
  return (
    <ListBox>
      {category}
      <LinkToURL href={placeUrl} target="_blank">
        <ListHeader>{placeName.split(' ')[0]}</ListHeader>
        <p>{bookmarkMemo}</p>
      </LinkToURL>
      <Closebtn onClick={handleButton}>
        <IoIosClose className="close" />
      </Closebtn>
    </ListBox>
  );
}

export default WritingBoardList
