import React, { useEffect } from 'react';
import BookmarkInfo from './BookmarkInfo';
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
			<div id="x" onClick={() => setAddBookmark(!addBookmark)}>
				x
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
	top: 0;
	left: 90vw;
	background-color: white;
	display: flex;
	flex-flow: column;
	width: 10rem;
	height: 50rem;
	text-align: center;
	opacity: 0.8;

	#x {
		text-align: end;
		height: 1rem;
		line-height: 1rem;
	}

	.redirect {
		justify-self: center;
	}
`;
