import React from 'react';
import Searchbar from './Searchbar';
import PlaceInfo from '../../components/PlaceInfo';
import SetModalBtn from '../../components/SetModalBtn';
import styled from 'styled-components';

function Extendbar({ isOpen }) {
	return (
		<ExtendbarStyle toggle={isOpen}>
			<Searchbar />
			<PlaceInfo />
			<SetModalBtn />
		</ExtendbarStyle>
	);
}

const ExtendbarStyle = styled.div`
	position: absolute;
	border-right: 1px solid rgb(219, 219, 219);
	display: flex;
	flex-flow: column;
	z-index: -1;
	top: 0;
	left: ${props => (props.toggle ? '110px' : '-25rem')};
	width: 25rem;
	height: 91.5vh;
	background-color: #fafafa;
	transition: 0.5s ease-in-out;
`;

export default Extendbar;
