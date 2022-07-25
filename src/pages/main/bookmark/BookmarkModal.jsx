import React, { useEffect } from 'react';
import BookmarkInfo from './BookmarkInfo';
import { BsFillStarFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai'
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
	bookmarkListState,
	bookmarkSetState,
	addBookmarkState,
	showBmListState,
} from '../../../recoil/Atom';

export default function BookmarkModal() {
	const [bmList] = useRecoilState(bookmarkListState);
	const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
	const [addBookmark, setAddBookmark] = useRecoilState(addBookmarkState);
	const [showBmList, setShowBmList] = useRecoilState(showBmListState);

	return (
		<BmModalStyle>
			<div className='title'><BsFillStarFill className='staricon' color='#ffb877' />북마크</div>
			<div id="x" onClick={() => setAddBookmark(!addBookmark)}>
				<AiFillCloseCircle color='#5f6caf'/>
			</div>
			<BookmarkInfo />
			<button className="makeBookmark" onClick={() => setShowBmList(true)}>
				여정 만들기
			</button>
		</BmModalStyle>
	);
}

const BmModalStyle = styled.div`
	position: absolute;
	top: 1rem;
	left: 50vw;
	background-color: white;
	border-radius: 4px;
	display: flex;
	flex-flow: column;
	width: 12rem;	
	height: 50rem;
	text-align: center;
	opacity: 0.8;
	
	.title {
		display:flex;
		justify-content: center;
		padding-right: 0.5rem;
	}

	.staricon {
		padding: 10px 5px 0 0;
	}

	#x {
		position: absolute;
		right: 0;
		margin: 2px;
		text-align: end;
		height: 1rem;
		line-height: 1rem;
		transform: scale(0.8);
	}

	.redirect {
		justify-self: center;
	}

	.makeBookmark {
		border: none;
		width: 10rem;
		height: 2rem;
		margin: 0.5rem auto;
		background-color: #5f6caf;
		color: white;
		border-radius: 0.5rem;
	}
`;
