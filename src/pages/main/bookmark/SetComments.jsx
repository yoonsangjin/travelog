import React, { useState, useRef } from 'react';
import { BsPencilFill } from 'react-icons/bs';
import styled from 'styled-components';
function SetComments(props) {
	const [text, setText] = useState('메모를 등록해 주세요.');
	const inputRef = useRef();
	const buttonRef = useRef();
	const pRef = useRef();
	
	function handleForm (e) {
		if (inputRef.current.type === 'text') {
			inputRef.current.type = 'hidden';
			buttonRef.current.style.display = 'none';
			pRef.current.style.display = 'inline';
		} else if (inputRef.current.type === 'hidden') {
			inputRef.current.type = 'text';
			buttonRef.current.style.display = 'block';
			pRef.current.style.display = 'none';
		}
	}
	
	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleChange(e) {
		setText(e.target.value);
	}
	return (
		<SetCommentsStyle>
		<form onSubmit={handleSubmit}>
			<BsPencilFill className="addComments" onClick={handleForm}/>
			<input type="hidden" onChange={handleChange} ref={inputRef} placeholder='메모를 등록해 주세요.'/>
			<button type="submit" onClick={handleForm} ref={buttonRef}>등록하기</button>
			<p ref={pRef}>{text}</p>
		</form>
		</SetCommentsStyle>
	);
}

export default SetComments;

const SetCommentsStyle = styled.div`
.addComments {
		float: right;
		font-size: 1rem;
	}

	button {
		display: none;
	}

`;
