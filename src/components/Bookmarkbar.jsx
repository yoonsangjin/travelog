import React, { useEffect } from 'react';
import Searchbar from './Searchbar';
import { BsCaretLeftSquare } from 'react-icons/bs';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { bookmarkbarState,
        bookmarkListState,
        } from '../recoil/Atom';

function Bookmarkbar() {
	const [bmClose, setBmClose] = useRecoilState(bookmarkbarState);
    const [bmList, setBmList ] = useRecoilState(bookmarkListState);
	return (
		<BookmarkbarStyle>
			<div className={bmClose ? 'bookmarkbar close' : 'bookmarkbar'}>
				<Searchbar />
				<BsCaretLeftSquare id="closeBtn" onClick={() => setBmClose(true)} />
                <div className='bmContainer'>
                    <button className='addFolder' ></button>
                </div>
			</div>
		</BookmarkbarStyle>
	);
}

const BookmarkbarStyle = styled.div`
	.bookmarkbar {
		display: flex;
		flex-flow: column;
		position: absolute;
		top: -5rem;
		left: 4rem;
		width: 20rem;
		height: 100vh;
		background-color: #edf7fa;
	}

	.close {
		display: none;
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

export default Bookmarkbar;
