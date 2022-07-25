import React, { useState, useRef, useEffect } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { bookmarkState, bookmarkListState, bookmarkSetState } from '../../../recoil/Atom';
function SetComments({ data }) {
	const [text, setText] = useState('메모를 등록해 주세요.');
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const inputRef = useRef();
	const buttonRef = useRef();
	const pRef = useRef();

	useEffect(() => {
		// 통신을 위한 북마크 양식 변경
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
		setBookmarkSet(newObj);
		console.log(bookmarkSet);
	}, [text]);

	function handleForm(e) {
		if (inputRef.current.type === 'text') {
			inputRef.current.type = 'hidden';
			buttonRef.current.style.display = 'none';
			pRef.current.style.display = 'inline';
		} else if (inputRef.current.type === 'hidden') {
			inputRef.current.type = 'text';
			buttonRef.current.style.display = 'block';
			pRef.current.style.display = 'none';
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleChange(e) {
		setText(e.target.value);
	}
	return (
		<SetCommentsStyle>
			<form onSubmit={handleSubmit}>
				<BsPencilFill className="addComments" onClick={handleForm} />
				<input
					type="hidden"
					onChange={handleChange}
					ref={inputRef}
					placeholder="메모를 등록해 주세요."
				/>
				<button type="submit" onClick={handleForm} ref={buttonRef}>
					등록하기
				</button>
				<p ref={pRef}>{text}</p>
			</form>
		</SetCommentsStyle>
	);
}

export default SetComments;

const SetCommentsStyle = styled.div`
	.addComments {
		float: right;
		font-size: 1rem;
	}

	button {
		display: none;
	}
`;
