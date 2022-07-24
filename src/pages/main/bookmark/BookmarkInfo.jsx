import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import {
  placeInfoState,
  bookmarkState,
  activeState,
  detailInfoState,
} from '../../../recoil/Atom'
import { BsPencilFill } from 'react-icons/bs'
import SetComments from './SetComments'

function BookmarkInfo() {
  const [placeInfo, setPlaceInfo] = useRecoilState(placeInfoState)
  const [bookmark, setBookmark] = useRecoilState(bookmarkState)
  const [, setActive] = useRecoilState(activeState)
  const [detailInfo, setDetailInfo] = useRecoilState(detailInfoState)

  function handleStyle(data) {
    if (data.category_group_code == 'AT4') {
      return { border: '2px solid rgb(3, 155, 0)' }
    } else if (data.category_group_code == 'FD6') {
      return { border: '2px solid rgb(0, 41, 254)' }
    } else if (data.category_group_code == 'CE7') {
      return { border: '2px solid rgb(224, 88, 54)' }
    } else if (data.category_group_code == '') {
      return { border: '2px solid #d9d9d9' }
    }
  }
  function handleBookmark(e) {
      // 북마크에 장소 삭제
      const id = e.target.id
      setBookmark(bookmark.filter(data=> data.id !== id))
  }

  function ActivateExtend(e) {
    setActive(true)
    setDetailInfo(placeInfo[e.target.id]);
  }

  function makeBookmarkInfo(bookmark) {
    return bookmark.map((data, i) => (
      <div key={i} id={data.id} style={handleStyle(data)} className="bookmarkBox">
        <button id={data.id} className="deleteBtn" onClick={handleBookmark}>
          x
        </button>
          <div onClick={ActivateExtend} style={{ color: '#5f6caf', cursor: 'pointer' }}>
            <span id={i}>{data.place_name}</span>
          </div>
          <BsPencilFill/>
          <SetComments/>
      </div>
      
    ))
  }
  return (
    <BookmarkInfoStyle>
      {makeBookmarkInfo(bookmark)}
    </BookmarkInfoStyle>
  )
}
export default BookmarkInfo

const BookmarkInfoStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 10rem;
  height: 50rem;
  justify-content: flex-start;
  font-size: 0.5rem;
  margin: auto;
  overflow: scroll;
  

  overflow-y: auto;
  overflow-x: none;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

  .bookmarkBox {
    width: 10rem;
    height: 4rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    margin: 0.5rem 0;
    line-height: 1.5rem;
  }

  .deleteBtn {
    float: right;
    font-size: 1rem;
    border: none;
    background-color:transparent;
  }

  .addComments {
    float: right;
    font-size: 1rem;
  }
`
