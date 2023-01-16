import React from 'react';
import styled from 'styled-components';
import SidebarBtn from '../../components/SidebarBtn';
import { BiRestaurant } from 'react-icons/bi';
import { ImSearch, ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';
import { BsFillStarFill } from 'react-icons/bs';
import { FaHotel } from 'react-icons/fa';
import { MdLocalConvenienceStore } from 'react-icons/md';
import { useState } from 'react';
import Extendbar from './Extendbar';
import BookmarkModal from './bookmark/BookmarkModal';
import Bookmarkbar from './bookmark/Bookmarkbar';
import { useSetRecoilState } from 'recoil';
import { categoryState } from '../../recoil/Atom';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
	const [isBookmarkModalOpen, setIsBookmarkModalOpen] = useState(false);
	const setCategory = useSetRecoilState(categoryState);

	const btnStyle = [
		{
			btnName: 'search',
			icon: <ImSearch />,
			color: '#d9d9d9',
			onClick: () => {
				setIsOpen(isOpen => !isOpen);
				setIsBookmarkOpen(false);
			},
		},
		{
			btnName: 'restaurant',
			icon: <BiRestaurant />,
			color: '#0029fe',
			onClick: () => {
				setIsOpen(isOpen => true);
				setCategory(category => 'FD6');
			},
		},
		{
			btnName: 'cafe',
			icon: <IoMdCafe />,
			color: '#e05836',
			onClick: () => {
				setIsOpen(isOpen => true);
				setCategory(category => 'CE7');
			},
		},
		{
			btnName: 'hotel',
			icon: <FaHotel />,
			color: '#9642a3',
			onClick: () => {
				setIsOpen(isOpen => true);
				setCategory(category => 'AD5');
			},
		},
		{
			btnName: 'landmark',
			icon: <ImLibrary />,
			color: '#039b00',
			onClick: () => {
				setIsOpen(isOpen => true);
				setCategory(category => 'AT4');
			},
		},
		{
			btnName: 'convenience',
			icon: <MdLocalConvenienceStore />,
			color: '#32c9dd',
			onClick: () => {
				setIsOpen(isOpen => true);
				setCategory(category => 'CS2');
			},
		},
		{
			btnName: 'bookmark',
			icon: <BsFillStarFill />,
			color: '#ffb877',
			onClick: () => {
				setIsOpen(false);
				setIsBookmarkOpen(isOpen => !isOpen);
				setIsBookmarkModalOpen(true);
			},
		},
	];

	return (
		<SidebarStyle>
			{btnStyle.map((element, index) => {
				return (
					<SidebarBtn
						key={index}
						btnName={element.btnName}
						icon={element.icon}
						color={element.color}
						onClick={element.onClick}
					/>
				);
			})}
			<Extendbar
				isOpen={isOpen}
				isBookmarkOpen={isBookmarkOpen}
				setIsBookmarkOpen={setIsBookmarkOpen}
			/>
			{isBookmarkModalOpen && <BookmarkModal setIsBookmarkModalOpen={setIsBookmarkModalOpen} />}
			<Bookmarkbar isBookmarkOpen={isBookmarkOpen} />
		</SidebarStyle>
	);
};

const SidebarStyle = styled.div`
	left: 0;
	width: 80px;
	float: left;
	position: absolute;
	background-color: #ffffff;
	line-height: 48px;
	transition: 0.3s ease-in-out;
	height: 90vh;
	display: flex;
	flex-flow: column;
`;

export default Sidebar;
