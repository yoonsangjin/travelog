import React from 'react';
import styled from 'styled-components';
import SidebarBtn from '../../components/SidebarBtn';
import { BiRestaurant } from 'react-icons/bi';
import { ImSearch, ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';
import { BsFillStarFill } from 'react-icons/bs';

// import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// import {
// 	extendbarState,
// 	bookmarkbarState,
// 	placeState,
// 	mainInputValueState,
// 	activeState,
// } from '../../recoil/Atom';

const Sidebar = () => {
	const btnName = ['search', 'restaurant', 'landmark', 'cafe', 'bookmark'];
	const icon = [<ImSearch />, <BiRestaurant />, <ImLibrary />, <IoMdCafe />, <BsFillStarFill />];
	const color = ['#d9d9d9', '#0029fe', '#039b00', '#e05836', '#ffb877'];
	let btnStyle = [];
	for (let i = 0; i < icon.length; i++) {
		btnStyle[i] = {
			btnName: btnName[i],
			icon: icon[i],
			color: color[i],
		};
	}
	return (
		<SidebarStyle>
			{btnStyle.map((element, index) => {
				return (
					<SidebarBtn
						key={index}
						btnName={element.btnName}
						icon={element.icon}
						color={element.color}
					/>
				);
			})}
		</SidebarStyle>
	);
};

const SidebarStyle = styled.div`
	left: 0;
	width: 120px;
	float: left;
	position: relative;
	background-color: #ffffff;
	line-height: 48px;
	transition: 0.3s ease-in-out;
	height: calc(100vh - 80px);
	z-index: 10;
	display: flex;
	flex-flow: column;
`;

export default Sidebar;

// const setPlace = useSetRecoilState(placeState);
// const mainInputValue = useRecoilValue(mainInputValueState);
// const [bmClose, setBmClose] = useRecoilState(bookmarkbarState);
// const [close, setClose] = useRecoilState(extendbarState);
// const setActive = useSetRecoilState(activeState);

// const [btnActive, setBtnActive] = useState('');
// const search = useRef(),
// 	restaurant = useRef(),
// 	landmark = useRef(),
// 	cafe = useRef(),
// 	bookmark = useRef();

// useEffect(() => {
// 	const activeArray = [search, restaurant, landmark, cafe, bookmark];
// 	activeArray.map(element => {
// 		element.current.className === btnActive
// 			? (element.current.style = 'background: #fafafa;')
// 			: (element.current.style = 'background: white;');
// 	});
// }, [btnActive]);

// return (
// 	<SidebarStyle>
// 		<div className="filterBox">
// 			<div className="search" ref={search}>
// 				<ImSearch
// 					className="icon"
// 					style={{ marginTop: '30px', backgroundColor: '#d9d9d9' }}
// 					onClick={() => {
// 						setBmClose(true);
// 						setClose(!close);
// 						setBtnActive('search');
// 						setActive(false);
// 					}}
// 				/>
// 			</div>
// 			<div className="restaurant" ref={restaurant}>
// 				<BiRestaurant
// 					className="icon"
// 					style={{ backgroundColor: '#0029fe' }}
// 					onClick={() => {
// 						setBmClose(true);
// 						setClose(false);
// 						setPlace(mainInputValue + ' 식당');
// 						setBtnActive('restaurant');
// 					}}
// 				/>
// 			</div>
// 			<div className="landmark" ref={landmark}>
// 				<ImLibrary
// 					className="icon"
// 					style={{ backgroundColor: '#039b00' }}
// 					onClick={() => {
// 						setBmClose(true);
// 						setClose(false);
// 						setPlace(mainInputValue + ' 관광지');
// 						setBtnActive('landmark');
// 					}}
// 				/>
// 			</div>
// 			<div className="cafe" ref={cafe}>
// 				<IoMdCafe
// 					className="icon"
// 					style={{ backgroundColor: '#e05836' }}
// 					onClick={() => {
// 						setBmClose(true);
// 						setClose(false);
// 						setPlace(mainInputValue + ' 카페');
// 						setBtnActive('cafe');
// 					}}
// 				/>
// 			</div>
// 			<div className="bookmark" ref={bookmark}>
// 				<BsFillStarFill
// 					className="icon"
// 					style={{ backgroundColor: '#ffb877' }}
// 					onClick={() => {
// 						setClose(true);
// 						setBmClose(!bmClose);
// 						setBtnActive('bookmark');
// 						setActive(false);
// 					}}
// 				/>
// 			</div>
// 		</div>
// 	</SidebarStyle>
// );
