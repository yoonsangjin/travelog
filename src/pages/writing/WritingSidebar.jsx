import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TbStar } from 'react-icons/tb';
import WritingSearchbar from './WritingSearchbar';
import WritingList from './WritingList';
import { checkedState } from './WritingList'
import { atom, useRecoilState } from 'recoil'
import { toggleState, boardState } from '../../recoil/Atom.jsx'

const SidebarTitleBox = styled.div`
  margin: 1rem;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`
const FavoriteBox = styled.div`
  .icon {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    background-color: #ffb877;
    color: white;
    border-radius: 5px;
  }
`
const SidebarHeader = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`

const WritingsidebarContainer = styled.div`
  width: 30rem;
  height: 100%;
  background-color: #edf7fa;
  box-shadow: 0 40px 22px 2px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  position: fixed;
`
const SidebarListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
`

const ListFilterBox = styled.div`
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: ${props => props.children[0].props.className};
  background-color: #fff;
  .display {
    display: block;
  }
  .displayNone {
    display: None;
  }
  .space-between {
    display: block;
  }
  .flex-end {
    display: None;
  }
`
const EditBtn = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`
const Select = styled.select`
  border: none;
  background-color: #fff;
  cursor: pointer;
`
const EditBox = styled.div`
  display flex;
`
const data = [
  {
    id: 132,
    name: '해운대',
    index: 1,
    memo: '해운대 바다 멋짐',
    url: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
  },
  {
    id: 286,
    name: '광안리',
    index: 2,
    memo: '카타파~',
    url: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191229160530047_oen',
  },
  {
    id: 345,
    index: 3,
    name: '스타벅스',
    memo: '가나 존맛탱',
    url: 'http://www.foodbank.co.kr/news/photo/202106/61595_18750_5558.jpg',
  },
]
export const dataState = atom({ key: 'dataState', default: data })
function WritingSidebar() {
  const [list, setList] = useState(data)
  const [selected, setSelected] = useState('최신')
  useEffect(() => {
    let newlist = []
    switch (selected) {
      case '최신':
        newlist = [...list].sort((a, b) => a.index - b.index)
        setList(newlist)
        break
      case '장소':
        newlist = [...list].sort(function (a, b) {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        })
        setList(newlist)
        break
      case '메모':
        newlist = [...list].sort(function (a, b) {
          return a.memo < b.memo ? -1 : a.memo > b.memo ? 1 : 0
        })
        setList(newlist)
        break
    }
  }, [selected])

  const handleChange = e => {
    setSelected(e.target.value)
  }
  // 리스트 편집 토글
  const [toggle, setToggle] = useRecoilState(toggleState)
  const clickedToggle = () => {
    setToggle(prev => !prev)
  }
  const [board, setBoard] = useRecoilState(boardState)
  // 리스트 체크박스 상태관리
  const [checkedInputs, setCheckedInputs] = useRecoilState(checkedState)
  function handle() {
    const newList = list.filter(e => {
      return !checkedInputs.includes(e.id)
    })
    const checkedList = board.filter(e => {
      return !checkedInputs.includes(e.id)
    })
    setList(newList)
    setBoard(checkedList)
    setToggle(false)
  }
  return (
    <WritingsidebarContainer>
      <WritingSearchbar />
      <SidebarTitleBox>
        <FavoriteBox>
          <TbStar className="icon" id="favoriteIcon" />
        </FavoriteBox>
        <SidebarHeader>부산 여행</SidebarHeader>
      </SidebarTitleBox>
      <ListFilterBox>
        <Select onClick={e => handleChange(e)} className={!toggle ? 'space-between' : 'flex-end'}>
          <option value={'최신'}>최신순</option>
          <option value={'장소'}>장소명순</option>
          <option value={'메모'}>메모순</option>
        </Select>
        <EditBox>
          <EditBtn
            className={toggle ? 'display' : 'displayNone'}
            onClick={handle}
            style={{ color: 'red' }}
          >
            삭제
          </EditBtn>
          <EditBtn className="editBtn" onClick={clickedToggle} toggle={toggle}>
            {!toggle ? '편집' : '취소'}
          </EditBtn>
        </EditBox>
      </ListFilterBox>
      <SidebarListBox>
        {list.length ? (
          list.map(e => {
            return <WritingList id={e.id} name={e.name} url={e.url} memo={e.memo} />
          })
        ) : (
          <p>리스트가 비었습니다.</p>
        )}
      </SidebarListBox>
    </WritingsidebarContainer>
  )
}

export default WritingSidebar
