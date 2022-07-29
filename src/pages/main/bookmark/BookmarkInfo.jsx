import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import handleStyle from '../../../function/handleStyle';
import makeBookmark from '../../../function/makeBookmark';
import { MdOutlineClose } from 'react-icons/md';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
	placeInfoState,
	bookmarkState,
	bookmarkListState,
	bookmarkSetState,
	activeState,
	detailInfoState,
	textState,
	listNumberState,
} from '../../../recoil/Atom';
import SetComments from './SetComments';

function BookmarkInfo() {
	const placeInfo = useRecoilValue(placeInfoState);
	const bmList = useRecoilValue(bookmarkListState);
	const listNumber = useRecoilValue(listNumberState);
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [text, setText] = useRecoilState(textState);
	const setActive = useSetRecoilState(activeState);
	const setDetailInfo = useSetRecoilState(detailInfoState);
	const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
	const [comment, setComment] = useState();

	useEffect(() => {
		// let newBookmark = JSON.parse(JSON.stringify(bookmark));
		// let newObj = newBookmark.map(element => {
		// 	let newObj = {
		// 		bookmarkMemo: null,
		// 		placeName: element.place_name,
		// 		placeUrl: element.place_url,
		// 		categoryName: element.category_name,
		// 		addressName: element.address_name,
		// 		roadAddressName: element.road_address_name,
		// 		bookmarkId: element.id,
		// 		phone: element.phone,
		// 		categoryGroupCode: element.category_group_code,
		// 		categoryGroupName: element.category_group_name,
		// 		x: element.x,
		// 		y: element.y,
		// 	};
		// 	return newObj;
		// });
		// let textArray = Object.values(text);
		// let textKey = Object.keys(text);
		// textKey.map(key => (newObj[key].bookmarkMemo = textArray[key]));
		// let newArray = {
		// 	bookmarkName: bmList[listNumber],
		// 	data: newObj,
		// }

		let newArray = makeBookmark(bookmark, text, bmList, listNumber);

		setBookmarkSet(newArray);
		console.log(bookmarkSet);
	}, [bookmark, text]);

	function handleBookmark(e) {
		// 북마크에 장소 삭제
		const id = e.target.id;
		setBookmark(bookmark.filter(data => data.id !== id));
	}

	function ActivateExtend(e) {
		// 	setActive(true);
		// 	setDetailInfo(placeInfo[e.target.id]);
	}

	function makeBookmarkInfo(bookmark) {
		return bookmark.map((data, i) => (
			<div key={Math.random()} id={data.id} className="bookmarkBox">
				<div key={Math.random()}>{handleStyle(data)}</div>
				<div className="bookmarkInfoBox">
					<button id={data.id} name={i} className="deleteBtn" onClick={handleBookmark}>
						<MdOutlineClose />
					</button>
					<p onClick={ActivateExtend} className="bookmarkInfoName">
						{data.place_name}
					</p>
					<SetComments i={i} className="modalInput" comment={comment} setComment={setComment} />
					<p>{comment}</p>
				</div>
			</div>
		));
	}
	return <BookmarkInfoStyle>{makeBookmarkInfo(bookmark)}</BookmarkInfoStyle>;
}
export default BookmarkInfo;

const BookmarkInfoStyle = styled.div`
	display: flex;
	flex-flow: column;
	width: 19rem;
	height: 50rem;
	justify-content: flex-start;
	font-size: 0.75rem;
	margin: auto;
	overflow: scroll;
	overflow-y: auto;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #ccc;
	}

	.bookmarkBox {
		display: flex;
		width: 18rem;
		height: 6rem;
		background-color: white;
		border: 1px solid rgb(219, 219, 219);
		border-radius: 1rem;
		margin: 0.5rem auto;
		line-height: 1.5rem;
	}

	.placeInfoIcon {
		width: 2rem;
		display: inline-block;
		height: 2rem;
		float: left;
		padding: 0.25rem;
		margin: 1.6rem 0 0 1rem;
		border-radius: 0.25rem;
		color: white;
	}

	.bookmarkInfoName {
		color: #5f6caf;
		cursor: pointer;
		font-size: 0.9rem;
		margin: 0.2rem 0.3rem;
	}

	.deleteBtn {
		position: absolute;
		padding-top: 0.5rem;
		right: 1rem;
		font-size: 1rem;
		border: none;
		color: #5f6caf;
		background-color: transparent;
		cursor: pointer;
	}
	.addComments {
		position: absolute;
		right: 0;
		margin: 1rem 1.5rem 0 0;
		color: #edf7fa;
		font-size: 0.75rem;
	}

	.modalInput {
		transform: scale(0.8);
	}
`;