import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdStars } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { bookmarkbarState, bookmarkListState, showBmListState, listNumberState } from '../../../recoil/Atom';

function SelectBmList() {
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [bmClose, setBmClose] = useRecoilState(bookmarkbarState);
	const [showBmList, setShowBmList] = useRecoilState(showBmListState);
	const [listNumber, setListNumber] = useRecoilState(listNumberState);

	
	function handleList() {
		setBmClose(false);
		setShowBmList(false);
	}

	function handleClick(e) {
		setListNumber(e.target.name);
		
	}
	return (
		<SelectBmListStyle>
			<span>추가할 리스트 선택</span>
			<div className='allbtnContainer'>
			{bmList.map((data, i) => (
				<div key={data.id} className="selectBmListContainer">
					<button 
					name={i}
					className={ listNumber == i ? 'listBtn on' : 'listBtn' } 
					onClick={handleClick}>
					<div className='btnFlex'> 
					<MdStars color='#ffb877' id='btnStar' size='24' />{data}
					</div>
					</button>
				</div>
			))}
			</div>
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
	top: 60vh;
	left: 75vw;
	width: 15rem;
	padding: 1rem;
	padding-bottom: 2rem;
	background-color: white;
	border: 1px solid #edf7fa;

	span {
		font-weight: bold;
		padding: 0.5rem;
		color: #5f6caf;
	}

	.allbtnContainer {
		margin: 0.5rem;
	}
	.bmList {
		display: flex;
		width: 100%;
		flex-flow: column;
		
	}

	.btnFlex {
		display: flex;
		flex-basis: 1rem;
		margin: 1rem auto;
	}
	#btnStar {
		padding-right: 1rem;
	}

	.listBtn {
		width: 100%;
		font-size: 1rem;
		cursor: pointer;
		color: #555;
		border: none;
		border-radius: 0.5rem;
		background-color: white;
	}

	.listBtn:hover {
		background-color: #edf7fa;
	}

	.addBmListBtn {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		border: none;
		font-size: 1rem;
		font-weight: bold;
		cursor: pointer;
		color: #0385ff;
		background-color: transparent;
	}

	.on {
		background-color: #edf7fa;
	}
`;

export default SelectBmList;
