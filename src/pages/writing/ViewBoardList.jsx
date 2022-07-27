import React from 'react'
import styled from 'styled-components'
import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';

const ListBox = styled.div`
  padding: 1rem;
  position: relative;
  border-radius: 5px;
  background-color: #edf7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .icon {
    width: 2rem;
    height: 2rem;
  }
`;
const LinkToURL = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`;
const ListHeader = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`

function ViewBoardList({ bookmarkId, placeName, placeUrl, bookmarkMemo }) {
  return (
    <ListBox>
      <IoMdCafe className="icon" />
      <LinkToURL href={placeUrl} target="_blank">
        <ListHeader>{placeName.split(' ')[0]}</ListHeader>
        <p>{bookmarkMemo}</p>
      </LinkToURL>
    </ListBox>
  );
}

export default ViewBoardList
