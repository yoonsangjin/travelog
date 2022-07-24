import React from 'react';

function SetComments() {
	function handleSubmit() {
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" />
			<button type="submit">등록하기</button>
		</form>
	);
}

export default SetComments;
