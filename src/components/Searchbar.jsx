import React, { useState } from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import Map from './Map';

const SearchBarContainer = styled.div`

    .searchbar {
      display: flex;
      justify-self: center;
      margin: 15px 20px;
      height: 40px;
      width: 250px;
      background-color: white;
    }

    .searchPlace {
      border: none;
      flex-grow: 3;
  
    }
  
    .searchPlace:focus {
      outline: none;
  
    }
  
    .searchBtn {
        justify-self: end;
        margin-top: 2px;
        flex-grow: 1;
        flex-basis: 20px;
        transform: scale(1.5);
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [place, setPlace] = useState('');
  
  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputValue);
    setInputValue('');  
    console.log(inputValue);
  };

  return (
    <SearchBarContainer>
      <form className='searchbar' onSubmit={ handleSubmit }>
            <input className='searchPlace' 
              placeholder='Search Place...'
              onChange={onChange}
              value={inputValue}
            />
            <button type='submit' className='searchBtn'><ImSearch /></button>
      </form>
      <Map Searchbar={ place } />
    </SearchBarContainer>
  );
}

export default Searchbar;