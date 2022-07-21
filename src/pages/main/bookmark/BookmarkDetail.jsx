import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { bookmarkState } from '../../../recoil/Atom';

function BookmarkDetail() {
	const [bookmark] = useRecoilState(bookmarkState);
	function getBookmark() {
		return bookmark.map((data, i) => (
			<div key={i} style={handleStyle(data)} className="infoBox">
				<ul>
					<li>{data.place_name}</li>
					<li>{data.address_name}</li>
					<li>{data.phone}</li>
				</ul>
			</div>
		));
	}

	function handleStyle(data) {
		if (data.category_group_code === 'AT4') {
			return { border: '2px solid rgb(3, 155, 0)' };
		} else if (data.category_group_code === 'FD6') {
			return { border: '2px solid rgb(0, 41, 254)' };
		} else if (data.category_group_code === 'CE7') {
			return { border: '2px solid rgb(224, 88, 54)' };
		}
	}

	return (
		<DetailPageStyle>
			<div className="folder">부산여행</div>
			<div className="content">{getBookmark()}</div>
			<button>글쓰기</button>
		</DetailPageStyle>
	);
}

const DetailPageStyle = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	margin: auto;

	.folder {
		height: 3rem;
		margin: 1rem auto;
	}
	.content {
		height: 75vh;
		margin: 1rem auto;
		overflow: scroll;
	}

	.infoBox {
		width: 15rem;
		height: 8rem;
		font-size: 1rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
		margin: 1rem auto;
		padding: 1rem;
		line-height: 2rem;
	}
`;

export default BookmarkDetail;
