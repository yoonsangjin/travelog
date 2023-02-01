import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function MapContainer() {
	return (
		<MapContainerStyle>
			<Map // 지도를 표시할 Container
				center={{
					// 지도의 중심좌표
					lat: 33.450701,
					lng: 126.570667,
				}}
				style={{
					// 지도의 크기
					width: '100%',
					height: '100%',
				}}
				level={3} // 지도의 확대 레벨
			/>
		</MapContainerStyle>
	);
}

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
