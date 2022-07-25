import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil';
import {
  bookmarkState,
	bookmarkSetState,
} from '../../../recoil/Atom';
import BookmarkInfoDetail from './BookmarkInfoDetail';
function BookmarkDetail() {
  const [bookmark, setBookmark] = useRecoilState(bookmarkState);
  const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
  function handleStyle(data) {
    if (data.category_group_code === 'AT4') {
      return { border: '2px solid rgb(3, 155, 0)' }
    } else if (data.category_group_code === 'FD6') {
      return { border: '2px solid rgb(0, 41, 254)' }
    } else if (data.category_group_code === 'CE7') {
      return { border: '2px solid rgb(224, 88, 54)' }
    }
  }

  return (
    <DetailPageStyle>
      <div className="folder"></div>
      <div className="content">
        <BookmarkInfoDetail/>
      </div>
      <button>글쓰기</button>
    </DetailPageStyle>
  )
}

const DetailPageStyle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: auto;

  .folder {
    height: 2rem;
    margin: 1rem auto;
  }
  .content {
    width: 30rem;
    height: 70vh;
    margin: 1rem auto;
    overflow: scroll;
    overflow-y: auto;
    overflow-x: hidden;
  }
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

  .infoBox {
    width: 15rem;
    height: 8rem;
    font-size: 2rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    margin: 1rem auto;
    padding: 1rem;
    line-height: 2rem;
  }
`

export default BookmarkDetail
