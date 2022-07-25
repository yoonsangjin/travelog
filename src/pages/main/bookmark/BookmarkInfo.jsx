import React, { useEffect } from 'react';
import styled from 'styled-components';
import handleStyle from '../../../function/handleStyle';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import {
	placeInfoState,
	bookmarkState,
	bookmarkListState,
	activeState,
	detailInfoState,
	textState,
	listNumberState,
} from '../../../recoil/Atom';
import SetComments from './SetComments';

function BookmarkInfo() {
	const [placeInfo, setPlaceInfo] = useRecoilState(placeInfoState);
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [, setActive] = useRecoilState(activeState);
	const [detailInfo, setDetailInfo] = useRecoilState(detailInfoState);
	const [text, setText] = useRecoilState(textState);
	const [listNumber, setListNumber] = useRecoilState(listNumberState);

	useEffect(() => {
		let newBookmark = JSON.parse(JSON.stringify(bookmark));
		let newObj = newBookmark.map(element => {
			let newObj = {
				bookmarkMemo: text,
				placeName: element.place_name,
				placeUrl: element.place_url,
				categoryName: element.category_name,
				addressName: element.address_name,
				roadAddressName: element.road_address_name,
				bookmarkId: element.id,
				phone: element.phone,
				categoryGroupCode: element.category_group_code,
				categoryGroupName: element.category_group_name,
				x: element.x,
				y: element.y,
			};
			return newObj;
		});

		let newArray = {
			bookmarkName: bmList[listNumber],
			data: newObj,
		};

		console.log(newArray);
	}, [listNumber]);
	
	function handleBookmark(e) {
		// 북마크에 장소 삭제
		const id = e.target.id;
		setBookmark(bookmark.filter(data => data.id !== id));
	}

	function ActivateExtend(e) {
		setActive(true);
		setDetailInfo(placeInfo[e.target.id]);
	}

	function makeBookmarkInfo(bookmark) {
		return bookmark.map((data, i) => (
			<div key={i} id={data.id} style={handleStyle(data)} className="bookmarkBox">
				<button id={data.id} className="deleteBtn" onClick={handleBookmark}>
					<AiFillCloseCircle className='circleX' color='#5f6caf'/>
				</button>
				<div onClick={ActivateExtend} style={{ color: '#5f6caf', cursor: 'pointer' }}>
					<span id={i}>{data.place_name}</span>
				</div>
				<SetComments className='modalInput'/>
			</div>
		));
	}
	return <BookmarkInfoStyle>{makeBookmarkInfo(bookmark)}</BookmarkInfoStyle>;
}
export default BookmarkInfo;

const BookmarkInfoStyle = styled.div`
	display: flex;
	flex-flow: column;
	width: 12rem;
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
		width: 10rem;
		height: 4rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
		margin: 0.5rem auto;
		line-height: 1.5rem;
	}

	.deleteBtn {
		position: absolute;
		padding-top: 0.5rem;
		right: 1rem;
		font-size: 1rem;
		border: none;
		background-color: transparent;
		cursor: pointer
	}
	.addComments {
		position: absolute;
		right: 0;
		margin: 1rem 1rem 0 0;
		color: #e05836;
		font-size: 0.75rem;
	}

	.modalInput {
		transform: scale(0.8);
	}
`;
