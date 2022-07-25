import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { TbStar } from 'react-icons/tb'
import WritingSearchbar from './WritingSearchbar'
import ViewBoardList from './ViewBoardList'
import ViewList from './ViewList'
import Comment from './Comment'
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';

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
  width: 24vw;
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
  justify-content: flex-end;
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
const Select = styled.select`
  border: none;
  background-color: #fff;
  cursor: pointer;
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
const writing = {
  writingData: '<p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p><p>여기에 글을 추가하세요!</p><p><br class="ProseMirror-trailingBreak"></p><blockquote><p>어디에</p></blockquote><p><strong>무엇을</strong></p><p><strong><em>어떻게</em></strong></p><p><del>적어야</del></p><p><span style="color: #ab4642">할가용</span></p>v'
  ,
  board: [
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
  ],
}
function View() {
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
  const html = writing.writingData
  const view = writing.board
  return (
    <WritingSection>
      <WritingsidebarContainer>
        <WritingSearchbar />
        <SidebarTitleBox>
          <FavoriteBox>
            <TbStar className="icon" id="favoriteIcon" />
          </FavoriteBox>
          <SidebarHeader>부산 여행</SidebarHeader>
        </SidebarTitleBox>
        <ListFilterBox>
          <Select onClick={e => handleChange(e)}>
            <option value={'최신'}>최신순</option>
            <option value={'장소'}>장소명순</option>
            <option value={'메모'}>메모순</option>
          </Select>
        </ListFilterBox>
        <SidebarListBox>
          {list.length ? (
            list.map(e => {
              return <ViewList id={e.id} name={e.name} url={e.url} memo={e.memo} />
            })
          ) : (
            <p>리스트가 비었습니다.</p>
          )}
        </SidebarListBox>
      </WritingsidebarContainer>
      <WritingContainer>
        <EditContainer>
          <WritingHeaderBox>
            <WritingHeader>부산여행</WritingHeader>
          </WritingHeaderBox>
          <Board>
            {view.map(e => {
              return <ViewBoardList id={e.id} name={e.name} url={e.url} memo={e.memo} />
            })}
          </Board>
          <ViewerBox>
            <Viewer initialValue={html} />
          </ViewerBox>
        </EditContainer>
        <Comment />
      </WritingContainer>
    </WritingSection>
  )
}

export default View
