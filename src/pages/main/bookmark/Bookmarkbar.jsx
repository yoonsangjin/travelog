import React from 'react';
import Searchbar from '../Searchbar';
import { IoMdAirplane } from 'react-icons/io';
import styled from 'styled-components';
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { bookmarkbarState, viewDetailState, loginState } from '../../../recoil/Atom';
// import BookmarkList from './BookmarkList';
// import BookmarkDetail from './BookmarkDetail';
import SetModalBtn from '../../../components/SetModalBtn';

const Bookmarkbar = ({ isBookmarkOpen }) => {
	// const [bmClose, setBmClose] = useRecoilState(bookmarkbarState);
	// const [getNumber, setGetNumber] = useState('');
	// const isLoggedIn = useRecoilValue(loginState);
	// const viewDetail = useRecoilValue(viewDetailState);

	// useEffect(() => {
	// 	renderDetailPage();
	// }, [viewDetail]);

	// function renderDetailPage() {
	// 	return viewDetail ? (
	// 		<BookmarkList getNumber={getNumber} setGetNumber={setGetNumber} />
	// 	) : (
	// 		<BookmarkDetail getNumber={getNumber} setGetNumber={setGetNumber} />
	// 	);
	// }

	return (
		<BookmarkbarStyle toggle={isBookmarkOpen}>
			<Searchbar />
			<SetModalBtn />
			<p className="myTravel">
				<IoMdAirplane /> 나의 여정
			</p>
			<div className="contents">
				{/* {isLoggedIn ? (
					renderDetailPage()
				) : (
					<span className="pleaseLogin">로그인이 필요합니다.</span>
				)} */}
			</div>
		</BookmarkbarStyle>
	);
};

const BookmarkbarStyle = styled.div`
	position: absolute;
	z-index: -1;
	border-right: 1px solid rgb(219, 219, 219);
	display: flex;
	flex-flow: column;
	top: 0;
	left: ${props => (props.toggle ? '120px' : '-20rem')};
	width: 25rem;
	height: 91.5vh;
	background-color: #fafafa;
	transition: 0.5s ease-in-out;

	.myTravel {
		background-color: transparent;
	}

	p {
		font-size: 1rem;
		margin: 0 1rem;
		background-color: white;
		border-radius: 0.5rem;
		text-align: center;
	}

	.contents {
		height: 75vh;
		margin: 1rem;
	}

	.pleaseLogin {
		position: absolute;
		top: 50%;
		left: 30%;
	}
`;

export default Bookmarkbar;
