import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import EditModal from './EditModal';

function EditBookmark({ edit, setEdit }) {
	function editFolder() {
		setEdit(true);
		console.log(edit);
	}
	return (
		<>
			<BsThreeDots className='editBtn' onClick={editFolder} />
			{edit && <EditModal />}
		</>
	);
}

export default EditBookmark;
