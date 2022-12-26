import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import overlayContents from '../function/overlayContents';
// import { useRecoilState, useSetRecoilState } from 'recoil';
// import { placeState, placeInfoState, mainInputValueState } from '../recoil/Atom';
// import makeMap from '../function/makeMap';
// import searchMap from '../function/searchMap';
// import customMarker from '../function/customMarker';

const Map = () => {
	const { kakao } = window;
	const location = useLocation();
	const queryArray = decodeURI(location.search).split('=');
	let params = queryArray[1];
	const mapRef = useRef();

	useEffect(() => {
		const container = mapRef.current;
		const defaultLatLng = new kakao.maps.LatLng(36.390884093020325, 127.40080871739734);
		const options = {
			center: defaultLatLng,
			level: 4,
		};
		const kakaoMap = new kakao.maps.Map(container, options);
		kakaoMap.setMaxLevel(12);
		const places = new kakao.maps.services.Places();

		const placesSearchCB = (data, status, pagination) => {
			if (status === kakao.maps.services.Status.OK) {
				const imageSrc = 'https://elice.school/elice-logo-symbol.png',
					imageSize = new kakao.maps.Size(40, 40),
					imageOption = { offset: new kakao.maps.Point(27, 69) };

				const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
				let bounds = new kakao.maps.LatLngBounds();
				for (let i = 0; i < data.length; i++) {
					let marker = new kakao.maps.Marker({
						map: kakaoMap,
						position: new kakao.maps.LatLng(data[i].y, data[i].x),
						image: markerImage,
					});
					let infowindow = new kakao.maps.InfoWindow({
						zIndex: 1,
						removable: true,
					});

					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
					kakao.maps.event.addListener(marker, 'click', function () {
						infowindow.setContent(overlayContents(data[i]));
						infowindow.open(kakaoMap, marker);
					});
					kakao.maps.event.addListener(kakaoMap, 'zoom_changed', function () {
						if (kakaoMap.getLevel() > 8) {
							infowindow.close();
							marker.setMap(null);
						}
					});
				}
				kakaoMap.setBounds(bounds);
			}
		};

		places.keywordSearch('엘리스코딩', placesSearchCB);
	}, []);

	// const [place, setPlace] = useRecoilState(placeState);
	// const setPlaceInfo = useSetRecoilState(placeInfoState);
	// const setMainInputValue = useSetRecoilState(mainInputValueState);

	// useEffect(() => {
	// 	const kakaoMap = makeMap();
	// 	searchMap(kakaoMap, place, setPlaceInfo);
	// 	customMarker(kakaoMap);
	// }, [place]);

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
