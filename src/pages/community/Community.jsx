import React, { useState } from 'react';
import PostBox from '../../components/PostBox';
import SearchbarIntro from '../../components/SearchbarIntro';
import styled from 'styled-components';
function Community() {
	const [inputValue, setInputValue] = useState('');
	const [travelTab, setTravelTab] = useState(false);
	const [qanda, setQAndA] = useState(false);
	const [companion, setCompanion] = useState(true);

	const handleChange = e => {
		setInputValue(e.target.value);
	};
	const handleClick = () => {
		console.log(inputValue);
	};
	// const handleClickForTab = e => {
	// 	e.target.style.backgroundColor = 'blue';
	// };
	return (
		<div>
			<TabMenuUl>
				<TabMenuLi>여행하기</TabMenuLi>
				<TabMenuLi>동행 구해요</TabMenuLi>
				<TabMenuLi>Q & A</TabMenuLi>
			</TabMenuUl>
			<SearchbarIntro
				title=""
				containerWidth="60rem"
				containerHeight="5rem"
				inputWidth="40rem"
				titlePadding="0"
				value={inputValue}
				changeMethod={handleChange}
				clickMethod={handleClick}
			/>
			<PostBox />
		</div>
	);
}

export default Community;

const TabMenuUl = styled.ul`
	width: 60vw;
	margin: 60px auto 0;
	display: flex;
	justify-content: space-between;
`;

const TabMenuLi = styled.li`
	width: 11rem;
	height: 4rem;
	border-radius: 22px;
	background-color: #edf7fa;
	text-align: center;
	line-height: 4rem;
`;
