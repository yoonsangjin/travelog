import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ViewBoardList from './ViewBoardList'
import Comment from './Comment'
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import axios from 'axios';
const WritingSection = styled.section`
  width: 100vw;
  height: 100vh;
  gap: 2rem;
`
const WritingContainer = styled.div`
  width: 74vw;
  padding-left: 1vw;
  margin-left: 25vw;
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
`
const EditContainer = styled.div`
  display: flex;
  width: 46vw;
  padding-right: 2vw;
  flex-direction: column;
  padding-top: 3rem;
  gap: 2rem;
  .toastui-editor-defaultUI {
    border: 3px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
  .toastui-editor-defaultUI-toolbar {
    background-color: #edf7fa;
  }
`
const WritingHeader = styled.h1`
  font-size: 2rem;
`
const WritingHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const Board = styled.div`
  width: 100%;
  height: 10rem;
  background-color: #edf7fa;
  box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  overflow: scroll;
`
const ViewerBox = styled.div`
  padding: 2rem;
  margin-top: 1rem;
`

function View() {
  const [writing, setWriting] = useState({});
  //axios bearer token
  const token = window.localStorage.getItem('token');
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getWritingData = async () => {
    try {
      await axios
        .get('http://localhost:8000/api/posts/user/10', config)
        .then(res => setWriting(res.data))
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWritingData();
  }, []);
  const view = [];
  return (
    <WritingSection>
      <WritingContainer>
        <EditContainer>
          <WritingHeaderBox>
            <WritingHeader>부산여행</WritingHeader>
          </WritingHeaderBox>
          <Board>
            {view.map(e => {
              return (
                <ViewBoardList
                  bookmarkId={e.bookmarkId}
                  placeName={e.placeName}
                  placeUrl={e.placeUrl}
                  bookmarkMemo={e.bookmarkMemo}
                />
              );
            })}
          </Board>
          <ViewerBox>
            {writing.content ? <Viewer initialValue={writing.content} /> : ''}
          </ViewerBox>
        </EditContainer>
        <Comment />
      </WritingContainer>
    </WritingSection>
  );
}

export default View
