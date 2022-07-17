import React, { useState } from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

const SearchbarBox = styled.div`
	background-color: #fff;
	margin: 2rem 1rem 1rem 1rem;
	padding: 0.5rem;
	border-radius: 12px;
`;

const SearchButton = styled.button`
	border: 0;
	outline: 0;
	padding: 0.5rem;
	background-color: #fff;
`;
const SearchInput = styled.input`
	border: 0;
	outline: 0;
`;
const SearchForm = styled.form`
	display: flex;
	justify-content: space-between;
`;
function WritingSearchbar() {
	const [inputValue, setInputValue] = useState(null);
	const onChange = e => {
		setInputValue(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		setInputValue(inputValue);
		console.log({ inputValue });
	};

	return (
		<SearchbarBox>
			<SearchForm className="searchbar" onSubmit={handleSubmit}>
				<SearchInput
					className="search"
					placeholder="Search"
					onChange={onChange}
					value={inputValue}
				/>
				<SearchButton type="submit" className="searchBtn">
					<ImSearch />
				</SearchButton>
			</SearchForm>
		</SearchbarBox>
	);
}

export default WritingSearchbar;