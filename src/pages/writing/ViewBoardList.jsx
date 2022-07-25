import React from 'react'
import styled from 'styled-components'

const ListBox = styled.div`
  padding: 1rem;
  position: relative;
  border-radius: 5px;
  background-color: #edf7fa;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ListImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 2px;
  overflow: hidden;
`;
const ListHeader = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`

function ViewBoardList({ name, url }) {
  return (
    <ListBox>
      <ListImg src={url} />
      <ListHeader>{name}</ListHeader>
    </ListBox>
  )
}

export default ViewBoardList
