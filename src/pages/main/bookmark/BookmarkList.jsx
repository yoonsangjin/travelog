import React, { useRef } from 'react';
import styled from 'styled-components';
import { MdStars } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { bookmarkListState, viewDetailState, listNumberState } from '../../../recoil/Atom';
function BookmarkList() {
  const [bmList, setBmList] = useRecoilState(bookmarkListState);
  const [, setViewDetail] = useRecoilState(viewDetailState);
  const [listNumber, setListNumber] = useRecoilState(listNumberState);

  const inputRef = useRef();
  const hiddenDivRef = useRef();
  const btnRef = useRef();

  function addFolder(e) {
    console.log(hiddenDivRef.current);
    hiddenDivRef.current.style.display = 'flex';
    inputRef.current.value;
  }
  function viewMore(e) {
    setViewDetail(false);
    setListNumber(e.target.id);
  }

  function handleSubmit() {
    setBmList([...bmList, inputRef.current.value]);
    hiddenDivRef.current.style.display = 'none';
  }

  return (
    <BmListStyle>
      <div className="btnContainer">
        <button className="addFolder" onClick={addFolder}>
          폴더 추가
        </button>
        <button className="editFolder">폴더 편집</button>
      </div>
      <div className="listContainer">
        {bmList.map((element, i) => (
          <div key={i} className="folder" id={i} onClick={viewMore}>
            <MdStars color='#ffb877' id='btnStar' size='32' />
            {element}
          </div>
        ))}
        <div className="hiddenDiv" ref={hiddenDivRef}>
          <input type="text" placeholder="새 리스트" ref={inputRef} />
          <button className="submitNewList" onClick={handleSubmit} ref={btnRef}>
            완료
          </button>
        </div>
      </div>
    </BmListStyle>
  );
}

const BmListStyle = styled.div`
  .btnContainer {
    display: flex;
    width: 18rem;
    height: 2rem;
    margin-bottom: 2rem;
    background-color: #edf7fa;
  }

  .listContainer {
    display: flex;
    flex-flow: column;
    width: 18rem;
    height: 75vh;
    margin: 0 auto;
    background-color: white;
    border-radius: 1rem;
  }

  .btnContainer button {
    width: 9rem;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    margin: 1px;
    background-color: #5f6caf;
    color: white;
  }

  .btnContainer button:hover {
    background-color: #495597;
  }

  .folder {
    display: flex;
    width: 100%;
    height: 4rem;
    text-align: center;
    margin: 0.25rem;
    margin-left: 0;
    padding-top: 1rem;
    padding-left: 1rem;
    border-radius: 0.5rem;
    font-size: 1.2rem;
  }
  .folder:hover {
    background-color: #edf7fa;
  }

  #btnStar {
    color: rgb(255, 184, 119);
    padding: 0.5rem;
  }
  
  .hiddenDiv {
    display: none;
    height: 4rem;
    border: none;
    justify-content: center;
  }

  .hiddenDiv input {
    width: 80%;
  }

  .hiddenDiv button {
    border: none;
    border-radius: 0.5rem;
    margin: 1px;
    background-color: #5f6caf;
    color: white;
  }

  .hiddenDiv button:hover {
    background-color: #edf7fa;
  }
`;

export default BookmarkList;
