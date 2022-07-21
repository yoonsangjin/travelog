import React from 'react';
import Sidebar from './Sidebar.jsx';
import Map from '../../components/Map.jsx';

function Main() {
	return (
		<div className="main">
			<Sidebar />
			<Map />
		</div>
	);
}

export default Main;
