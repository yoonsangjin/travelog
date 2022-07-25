import React, { useState, useRef, useEffect } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import {
	bookmarkState,
	bookmarkListState,
	textState,
	listNumberState,
	bookmarkSetState,
} from '../../../recoil/Atom';
function SetComments(props) {
	const [value, setValue] = useState('');
	const [text, setText] = useRecoilState(textState);
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [listNumber, setListNumber] = useRecoilState(listNumberState);
	const inputRef = useRef();
	const buttonRef = useRef();
	const pRef = useRef();

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

	function handleBtn(e) {
		
		// 통신을 위한 북마크 양식 변경
		let newBookmark = JSON.parse(JSON.stringify(bookmark)); // 새로운 객체 생성
		let newObj = newBookmark.map(element => { // 프로퍼티 변경
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
		newObj[0].bookmarkMemo = value; // input의 value를 특정 배열 내 객체의 프로퍼티에 넣는 작업

		let newArray = {
			bookmarkName: bmList[listNumber],
			data: newObj,
		};

		setBookmarkSet(newArray); // 원하는 배열 완성
		console.log(bookmarkSet); // 잘 출력됨.
		
		inputRef.current.type = 'hidden';
		buttonRef.current.style.display = 'none';
		pRef.current.style.display = 'inline';
		
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleChange(e) {
		setValue(e.target.value);
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
				<button type="submit"  onClick={handleBtn} ref={buttonRef}>
					등록하기
				</button>
				<p ref={pRef}>{value}</p>
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
