import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import makeMap from '../function/makeMap';
import searchMap from '../function/searchMap';
import { useRecoilValue } from 'recoil';
import { placeState, categoryState } from '../recoil/Atom';

const Map = () => {
	const location = useLocation();
	const queryArray = decodeURI(location.search).split('=');
	let params = queryArray[1];
	const mapRef = useRef();
	const place = useRecoilValue(placeState);
	const category = useRecoilValue(categoryState);
	useEffect(() => {
		const container = mapRef.current;
		const kakaoMap = makeMap(container, params);
		searchMap(kakaoMap, params);
	}, []);

	useEffect(() => {
		const container = mapRef.current;
		const kakaoMap = makeMap(container);
		searchMap(kakaoMap, place, category);
	}, [place, category]);

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
