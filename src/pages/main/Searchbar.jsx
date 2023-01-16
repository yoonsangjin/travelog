import React, { useState } from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { useRecoilState } from 'recoil';
import { placeState } from '../../recoil/Atom';

const Searchbar = () => {
	const [place, setPlace] = useRecoilState(placeState);
	const [inputValue, setInputValue] = useState(place);

	const onChange = e => {
		setInputValue(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setInputValue(inputValue);
		setPlace(inputValue);
	};

	return (
		<SearchBarContainer>
			<form className="searchbar" onSubmit={handleSubmit}>
				<input className="searchPlace" placeholder={place} onChange={onChange} value={inputValue} />
				<button type="submit" className="searchBtn">
					<ImSearch />
				</button>
			</form>
		</SearchBarContainer>
	);
};

const SearchBarContainer = styled.div`
	.searchbar {
		display: flex;
		justify-self: center;
		margin: 1rem 2rem;
		height: 2rem;
		width: 20rem;
		background-color: white;
		border: 1px solid rgb(219, 219, 219);
	}

	.searchPlace {
		padding-left: 0.5rem;
		border: none;
		flex-grow: 3;
	}

	.searchPlace:focus {
		outline: none;
	}

	.searchBtn {
		opacity: 0.5;
		justify-self: end;
		margin-top: 2px;
		flex-grow: 1;
		flex-basis: 20px;
		transform: scale(1.2);
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

export default Searchbar;
