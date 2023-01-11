import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import makeMap from '../function/makeMap';
import { useRecoilState, useRecoilValue } from 'recoil';
import { placeState, categoryState } from '../recoil/Atom';
import searchPlace from '../function/searchPlace';
// import searchByCategory from '../function/searchByCategory';

const Map = () => {
	const mapRef = useRef();
	const queryArray = decodeURI(useLocation().search).split('=');
	const [place, setPlace] = useRecoilState(placeState);
	const category = useRecoilValue(categoryState);

	useEffect(() => {
		makeMap(mapRef);
		!place && setPlace(queryArray[1]);
	}, []);

	useEffect(() => {
		const kakaoMap = makeMap(mapRef);
		searchPlace(kakaoMap, place, category);
	}, [place, category]); // map 첫 로딩

	return <MapContainer ref={mapRef} />;
};

export default Map;

const MapContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: calc(100vh - 5rem);
	z-index: -2;
	.customOverlay {
		background-color: white;
		padding: 1rem;
		width: 20rem;
		height: 10rem;
		line-height: 2rem;
		font-weight: bold;
		border: none;
	}

	.toggleSwitch {
		float: right;
		color: #ddd;
	}

	#toggle:checked ~ .toggleSwitch {
		color: rgb(255, 184, 119);
	}
`;
