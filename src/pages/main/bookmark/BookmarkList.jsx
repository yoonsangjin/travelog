import React, { useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { bookmarkListState, viewDetailState } from '../../../recoil/Atom';

function BookmarkList() {
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [, setViewDetail] = useRecoilState(viewDetailState);

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
	}

  function handleSubmit() {
    setBmList([...bmList, inputRef.current.value])
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
					<div key={i} className="folder" id={element} onClick={viewMore}>
						{element}
					</div>
				))}
				<div className="hiddenDiv" ref={hiddenDivRef}>
					<input type="text" placeholder='새 리스트' ref={inputRef} />
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
		margin: 2rem auto;
	}

	.listContainer {
		display: flex;
		flex-flow: column;
		width: 18rem;
		height: 60vh;
		margin: 0 auto;
	}

	.btnContainer button {
		width: 9rem;
	}

	.folder {
		height: 3rem;
		margin: 1rem auto;
	}

	.hiddenDiv {
		display: none;
	}
`;

export default BookmarkList;
