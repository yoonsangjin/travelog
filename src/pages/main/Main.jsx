import React from 'react';
import Sidebar from './Sidebar.jsx';
import Map from '../../components/Map.jsx';
import SelectBmList from './bookmark/SelectBmList.jsx';
import { useRecoilState } from 'recoil';
import { showBmListState } from '../../recoil/Atom';

function Main() {
	const [showBmList, setShowBmList] = useRecoilState(showBmListState);
	return (
		<>
			<Sidebar />
			<Map />

			{showBmList && <SelectBmList setShowBmList={showBmList} />}
		</>
	);
}

export default Main;
