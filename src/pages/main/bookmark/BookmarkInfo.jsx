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

function BookmarkInfo() {
  const [placeInfo] = useRecoilState(placeInfoState)
  const [bookmark, setBookmark] = useRecoilState(bookmarkState)
  const [, setActive] = useRecoilState(activeState)
  const [, setDetailInfo] = useRecoilState(detailInfoState)

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
  //리팩토링 요망
  const placeRef = useRef([])
  placeRef.current = []
  const inputRef = useRef([])
  inputRef.current = []
  const divRef = useRef([])
  divRef.current = []
  const btnRef = useRef([])
  btnRef.current = []
  const pRef = useRef([])

  function addPlaceRef(data) {
    placeRef.current.push(data)
  }

  function addComments(e) { // 메모 남기기
    const nodelist = e.target.parentElement.childNodes
    const divNode = e.target.parentElement.parentElement;
    const inputNode = nodelist[1]
    const btnNode = nodelist[2]
    const pNode = nodelist[3]
    if (inputNode.hidden == false) {
      inputNode.hidden = true;
      btnNode.style.display = 'none';
      pNode.style.display = 'inline';
      divNode.style.height = '4rem';
    } else {
      inputNode.hidden = false;
      inputNode.focus();
      btnNode.style.display = 'block';
      pNode.style.display = 'none';
      divNode.style.height = '6rem';
    }
  }
  function handleBookmark(e) {
      // 북마크에 장소 삭제
      const id = e.target.id
      setBookmark(bookmark.filter(data=> data.id != id))
  }

  function ActivateExtend(e) {
    setActive(true)
    setDetailInfo(placeRef.current[e.target.id])
  }

  function makeBookmarkInfo(bookmark) {
    return bookmark.map((data, i) => (
      <div key={i} id={data.id} style={handleStyle(data)} className="bookmarkBox" ref={divRef}>
        <button id={data.id} className="deleteBtn" onClick={handleBookmark} ref={addPlaceRef(data)}>
          x
        </button>
          <div id={i} onClick={ActivateExtend} style={{ color: '#5f6caf', cursor: 'pointer' }}>
            <span>{data.place_name}</span>
          </div>
          <div className='commentsContainer' id={data.id}>
            <BsPencilFill className='addComments' id={data.id} name={i} onClick={addComments}/>
            <input hidden type="text" id={data.id} className='commentsInput' ref={inputRef} />
            <button className='commentsBtn' style={{display: 'none'}} id={data.id} ref={btnRef}>확인</button>
            <p className='comments' id={data.id} ref={pRef}>메모를 입력해 주세요.</p>
          </div>
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
    font-size: 0.5rem;
    border: none;
    color: #ddd;
  }

  .addComments {
    float: right;
    font-size: 0.5rem;
    border: none;
    color: #ddd;
  }
`
