/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useRecoilValue } from 'recoil';
import { placeState, categoryState } from '../recoil/Atom';

const MapContainer = () => {
	const { kakao } = window;
	const [info, setInfo] = useState();
	const [map, setMap] = useState();
	const [markers, setMarkers] = useState([]);
	const [mapInfo, setMapInfo] = useState({
		center: {
			lat: 33.450701,
			lng: 126.570667,
		},
		errMsg: null,
		isLoading: true,
	});
	const [currentPosition, setCurrentPosition] = useState();
	const queryArray = decodeURI(useLocation().search).split('=');
	const place = useRecoilValue(placeState);
	const category = useRecoilValue(categoryState);

	const keywordSearch = place => {
		const ps = new kakao.maps.services.Places();
		ps.keywordSearch(place, (data, status, _pagination) => {
			if (status === kakao.maps.services.Status.OK) {
				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가합니다
				const bounds = new kakao.maps.LatLngBounds();
				let markers = [];

				for (let i = 0; i < data.length; i++) {
					// @ts-ignore
					markers.push({
						position: {
							lat: data[i].y,
							lng: data[i].x,
						},
						content: data[i].place_name,
					});
					// @ts-ignore
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}
				setMarkers(markers);

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
				map.setBounds(bounds);
			}
		});
	};

	useEffect(() => {
		if (navigator.geolocation) {
			// GeoLocation을 이용해서 접속 위치를 얻어옵니다
			navigator.geolocation.getCurrentPosition(
				position => {
					setMapInfo(prev => ({
						...prev,
						center: {
							lat: position.coords.latitude, // 위도
							lng: position.coords.longitude, // 경도
						},
						isLoading: false,
					}));
				},
				err => {
					setMapInfo(prev => ({
						...prev,
						errMsg: err.message,
						isLoading: false,
					}));
				},
			);
		} else {
			// HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
			setMapInfo(prev => ({
				...prev,
				errMsg: 'geolocation을 사용할수 없어요..',
				isLoading: false,
			}));
		}
	}, []);

	useEffect(() => {
		if (!map) return;
		keywordSearch(queryArray);
	}, [map]);

	useEffect(() => {
		keywordSearch(place);
	}, [place]);

	useEffect(() => {
		if (category && currentPosition) {
			const ps = new kakao.maps.services.Places();
			const searchCB = (data, status, _pagination) => {
				if (status === kakao.maps.services.Status.OK) {
					// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
					// LatLngBounds 객체에 좌표를 추가합니다
					let markers = [];
					for (let i = 0; i < data.length; i++) {
						// @ts-ignore
						markers.push({
							position: {
								lat: data[i].y,
								lng: data[i].x,
							},
							content: data[i].place_name,
						});
						// @ts-ignore
					}
					setMarkers(markers);
				}
			};
			ps.categorySearch(category, searchCB, {
				bounds: new kakao.maps.LatLngBounds(currentPosition.sw, currentPosition.ne),
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, currentPosition]);
	return (
		<MapContainerStyle>
			<Map // 지도를 표시할 Container
				center={mapInfo.center}
				style={{
					// 지도의 크기
					width: '100%',
					height: '100%',
				}}
				level={3} // 지도의 확대 레벨
				onCreate={setMap}
				onTileLoaded={map =>
					setCurrentPosition({
						sw: map.getBounds().getSouthWest(),
						ne: map.getBounds().getNorthEast(),
					})
				}
			>
				{!mapInfo.isLoading && (
					<MapMarker position={mapInfo.center}>
						<div style={{ padding: '5px', color: '#000' }}>
							{mapInfo.errMsg ? mapInfo.errMsg : '여기에 계신가요?!'}
						</div>
					</MapMarker>
				)}
				{markers.map(marker => (
					<MapMarker
						key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
						position={marker.position}
						onClick={() => setInfo(marker)}
					>
						{info && info.content === marker.content && (
							<div style={{ color: '#000' }}>{marker.content}</div>
						)}
					</MapMarker>
				))}
			</Map>
		</MapContainerStyle>
	);
};

export default MapContainer;

const MapContainerStyle = styled.div`
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

// // import React, { useEffect, useRef } from 'react';
// // import { useLocation } from 'react-router';
// // import styled from 'styled-components';
// // import makeMap from '../function/makeMap';
// // import { useRecoilState, useRecoilValue } from 'recoil';
// // import { placeState, categoryState } from '../recoil/Atom';
// // import searchPlace from '../function/searchPlace';

// // const Map = () => {
// // 	const mapRef = useRef();
// // 	const queryArray = decodeURI(useLocation().search).split('=');
// // 	const [place, setPlace] = useRecoilState(placeState);
// // 	const [category, setCategory] = useRecoilState(categoryState);

// // 	useEffect(() => {
// // 		makeMap(mapRef);
// // 		!place && setPlace(queryArray[1]);
// // 		// eslint-disable-next-line react-hooks/exhaustive-deps
// // 	}, []); // map 첫 로딩

// // 	useEffect(() => {
// // 		const kakaoMap = makeMap(mapRef);
// // 		searchPlace(kakaoMap, place, '');
// // 	}, [place]);

// // 	useEffect(() => {
// // 		const kakaoMap = makeMap(mapRef);
// // 		searchPlace(kakaoMap, place, category);
// // 	}, [category]);

// // 	return <MapContainer ref={mapRef} />;
// // };

// // export default Map;

// // const MapContainer = styled.div`
// // 	position: absolute;
// // 	width: 100vw;
// // 	height: calc(100vh - 5rem);
// // 	z-index: -2;
// // 	.customOverlay {
// // 		background-color: white;
// // 		padding: 1rem;
// // 		width: 20rem;
// // 		height: 10rem;
// // 		line-height: 2rem;
// // 		font-weight: bold;
// // 		border: none;
// // 	}

// // 	.toggleSwitch {
// // 		float: right;
// // 		color: #ddd;
// // 	}

// // 	#toggle:checked ~ .toggleSwitch {
// // 		color: rgb(255, 184, 119);
// // 	}
// // `;
