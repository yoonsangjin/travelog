import React from 'react';
import { BsCaretLeftSquare } from 'react-icons/bs';
import Searchbar from './Searchbar';
import PlaceInfo from '../../components/PlaceInfo';
import BookmarkModal from './bookmark/BookmarkModal';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { activeState, extendbarState, detailInfoState, addBookmarkState } from '../../recoil/Atom';

function Extendbar() {
	const [close, setClose] = useRecoilState(extendbarState);
	const [,setActive] = useRecoilState(activeState);
	const [,addBookmark] = useRecoilState(addBookmarkState);

	function handleExtendbar() {
		setClose(true)
		setActive(false)
	}

	return (
		<ExtendbarStyle>
			<div className={close ? 'extendbar close' : 'extendbar'}>
				<Searchbar />
					<PlaceInfo />
				<BsCaretLeftSquare id="closeBtn" onClick={handleExtendbar} />
			</div>
			{addBookmark && <BookmarkModal />}
		</ExtendbarStyle>
	);
}

const ExtendbarStyle = styled.div`
	position: absolute;
	z-index: 6;
	.extendbar {
		display: flex;
		flex-flow: column;
		position: absolute;
		top: 0;
		left: 4rem;
		width: 20rem;
		height: 91.5vh;
		background-color: #edf7fa;
		transition: 0.3s ease-in-out;
	}

	.close {
		left: -24rem;
		transition: 0.3s ease-in-out;
	}

	#closeBtn {
		position: absolute;
		top: 50vh;
		transform: scale(1.5);
		color: #5f6caf;
		opacity: 0.9;
		padding: 0;
		left: 260px;
	}
`;

export default Extendbar;
