import React, { useEffect } from 'react';
import styled from 'styled-components';
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

	function handleStyle(data) {
		if (data.category_group_code == 'AT4') {
			return { border: '2px solid rgb(3, 155, 0)' };
		} else if (data.category_group_code == 'FD6') {
			return { border: '2px solid rgb(0, 41, 254)' };
		} else if (data.category_group_code == 'CE7') {
			return { border: '2px solid rgb(224, 88, 54)' };
		} else if (data.category_group_code == '') {
			return { border: '2px solid #d9d9d9' };
		}
	}
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
					x
				</button>
				<div onClick={ActivateExtend} style={{ color: '#5f6caf', cursor: 'pointer' }}>
					<span id={i}>{data.place_name}</span>
				</div>
				<SetComments data={data} />
			</div>
		));
	}
	return <BookmarkInfoStyle>{makeBookmarkInfo(bookmark)}</BookmarkInfoStyle>;
}
export default BookmarkInfo;

const BookmarkInfoStyle = styled.div`
	display: flex;
	flex-flow: column;
	width: 10rem;
	height: 50rem;
	justify-content: flex-start;
	font-size: 0.5rem;
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
		margin: 0.5rem 0;
		line-height: 1.5rem;
	}

	.deleteBtn {
		float: right;
		font-size: 1rem;
		border: none;
		background-color: transparent;
	}

	.addComments {
		float: right;
		font-size: 1rem;
	}
`;
