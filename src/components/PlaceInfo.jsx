import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import {
	placeInfoState,
	addBookmarkState,
	bookmarkState,
	activeState,
	detailInfoState,
} from '../recoil/Atom';

function PlaceInfo() {
	const [placeInfo, ] = useRecoilState(placeInfoState);
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [, setActive] = useRecoilState(activeState);
	const [, setDetailInfo] = useRecoilState(detailInfoState);
	const [addBookmark, setAddBookmark] = useRecoilState(addBookmarkState);

	function handleBookmark(e) {
		setAddBookmark(true);
		const targetObj = placeInfo[e.target.name];
		if (!bookmark.some(data => data.id == e.target.id)) {
			setBookmark([...bookmark, targetObj]);
		} else if (bookmark.some(data => data.id == e.target.id)) {
			setBookmark(bookmark.filter(data => data.id != e.target.id));
			console.log(bookmark);
		}
	}

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

	function ActivateExtend(e) {
		setActive(true);
		setDetailInfo(placeInfo[e.target.id]);
	}

	function makePlaceInfo(placeInfo) {
		return placeInfo.map((data, i) => (
			<div key={i} id={data.id} name={i} style={handleStyle(data)} className="infoBox">
				<button
					id={data.id}
					name={i}
					className={bookmark.includes(data) ? 'bookmarkBtn on' : 'bookmarkBtn'}
					onClick={handleBookmark}
				>
					★
				</button>
				<ul>
					<li onClick={ActivateExtend} id={i} style={{ color: '#5f6caf', cursor: 'pointer' }}>
						{data.place_name}
					</li>
					<li>{data.address_name}</li>
				</ul>
			</div>
		));
	}
	return <PlaceInfoStyle>{placeInfo == '' ? '' : makePlaceInfo(placeInfo)}</PlaceInfoStyle>;
}
export default PlaceInfo;

const PlaceInfoStyle = styled.div`
	display: flex;
	flex-flow: column;
	width: 20rem;
	height: 90vh;
	justify-content: flex-start;
	font-size: 1rem;
	margin: auto;
	position: absolute;
	overflow: scroll;
	top: 80px;

	overflow-y: auto;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #ccc;
	}

	.infoBox {
		width: 15rem;
		height: 8rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
		margin: 1rem auto;
		padding: 1rem;
		line-height: 2rem;
	}

	.bookmarkBtn {
		float: right;
		font-size: 1.5rem;
		border: none;
		color: #ddd;
		background: transparent;
	}

  .on {
    color: #ffb877;
  }
`;
