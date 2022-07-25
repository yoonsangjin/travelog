import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { bookmarkbarState, bookmarkListState, showBmListState } from '../../../recoil/Atom';

function SelectBmList() {
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [bmClose, setBmClose] = useRecoilState(bookmarkbarState);
	const [showBmList, setShowBmList] = useRecoilState(showBmListState);
	function handleList() {
		setBmClose(false);
		setShowBmList(false);
	}
	return (
		<SelectBmListStyle>
			<span>추가할 리스트 선택</span>
			{bmList.map((data, i) => (
				<div key={i} className="selectBmListContainer">
					<input type="checkbox" id="list" className="selectBmList" />
					<label htmlFor="list">{data}</label>
				</div>
			))}
			<div className="addBmListContainer">
				<button className="addBmListBtn" onClick={handleList}>
					완료
				</button>
			</div>
		</SelectBmListStyle>
	);
}

const SelectBmListStyle = styled.div`
	position: absolute;
	z-index: 10;
	top: 75vh;
	left: 75vw;
	width: 15rem;
	height: 10rem;
	padding: 1rem;
	background-color: white;

	span {
		font-weight: bold;
	}
	.bmList {
		display: flex;
		flex-flow: column;
	}

	.addBmListBtn {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
	}
`;

export default SelectBmList;
