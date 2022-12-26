import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { placeState, placeInfoState, mainInputValueState } from '../recoil/Atom';
import makeMap from '../function/makeMap';
import searchMap from '../function/searchMap';
import customMarker from '../function/customMarker';
import MapBox from './MapBox';

function Map() {
	const [place, setPlace] = useRecoilState(placeState);
	const setPlaceInfo = useSetRecoilState(placeInfoState);
	const setMainInputValue = useSetRecoilState(mainInputValueState);
	const location = useLocation();

	useEffect(() => {
		const queryArray = decodeURI(location.search).split('=');
		let params = queryArray[1];
		const kakaoMap = makeMap();
		searchMap(kakaoMap, params, setPlaceInfo);
		setMainInputValue(params);
		setPlace(params);
	}, []);

	useEffect(() => {
		const kakaoMap = makeMap();
		searchMap(kakaoMap, place, setPlaceInfo);
		customMarker(kakaoMap);
	}, [place]);

	return (
		<MapContainer>
			<MapBox id="map" />
		</MapContainer>
	);
}

const MapContainer = styled.div`
	position: absolute;
	width: 100vw;
	height: calc(100vh - 5rem);
	z-index: 4;
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

export default Map;
