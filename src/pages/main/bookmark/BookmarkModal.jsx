import React from 'react';
import BookmarkInfo from './BookmarkInfo';
import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import styled from 'styled-components';

const BookmarkModal = ({ setIsBookmarkModalOpen }) => {
	return (
		<BmModalStyle>
			<div className="title">
				<p>북마크</p>
				<button
					id="x"
					onClick={() => {
						setIsBookmarkModalOpen(false);
					}}
				>
					x
				</button>
			</div>

			<BookmarkInfo />
			<button className="makeBookmark">여정 만들기</button>
		</BmModalStyle>
	);
};

export default BookmarkModal;

const BmModalStyle = styled.div`
	position: absolute;
	left: 80vw;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 4px;
	display: flex;
	flex-flow: column;
	width: 20rem;
	height: 45rem;
	text-align: center;
	overflow: scroll;

	overflow-y: auto;
	overflow-x: none;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #ccc;
	}

	p {
		font-size: 1.5rem;
	}
	.title {
		background-color: #fafafa;
		display: flex;
		justify-content: center;
	}

	#x {
		position: absolute;
		right: 0;
		margin: 2px;
		font-size: 2rem;
		transform: scale(0.8);
		border: none;
		background-color: transparent;
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

	.makeBookmark:hover {
		border: none;
		width: 10rem;
		height: 2rem;
		margin: 0.5rem auto;
		background-color: #5f6caf;
		color: white;
		border-radius: 0.5rem;
		filter: brightness(1.2);
		transform: scale(1.05);
		transition: 0.1s ease-in-out;
	}

	.makeBookmark:active {
		border: none;
		width: 10rem;
		height: 2rem;
		margin: 0.5rem auto;
		background-color: #5f6caf;
		color: white;
		border-radius: 0.5rem;
		transform: scale(0.9);
		filter: brightness(0.9);
	}
`;
