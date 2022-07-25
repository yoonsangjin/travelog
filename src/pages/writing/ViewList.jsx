import React from 'react'
import styled from 'styled-components'

const SidebarList = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: #edf7fa;
  cursor: pointer;
  display: flex;
  gap: 1rem;
`
const ListImg = styled.img`
  width: 8rem;
  height: 8rem;
`;
const ListHeader = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
const ListTextBox = styled.div`
  display: flex;
  width: 15rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`

function ViewList({ id, name, url, memo }) {
  const handleButton = () => {
    console.log(id)
  }
  return (
    <SidebarList onClick={handleButton}>
      <ListImg src={url} />
      <ListTextBox>
        <ListHeader>{name}</ListHeader>
        <p>{memo}</p>
      </ListTextBox>
    </SidebarList>
  )
}

export default ViewList
