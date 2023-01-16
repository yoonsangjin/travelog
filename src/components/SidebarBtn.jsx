import React from 'react';
import styled from 'styled-components';

function SidebarBtn({ btnName, icon, color, onClick }) {
	return (
		<SidebarBtnStyle className={btnName} color={color} onClick={onClick}>
			{icon}
		</SidebarBtnStyle>
	);
}

export default SidebarBtn;

const SidebarBtnStyle = styled.button`
	border: none;
	background-color: ${props => props.color};
	margin: 15px;
	padding: 5px;
	border-radius: 5px;
	color: white;
	font-size: 2rem;

	svg {
		padding-top: 5px;
	}

	:hover {
		transform: scale(1.1);
		opacity: 0.8;
	}

	:active {
		filter: brightness(50%);
	}
`;
