// import overlayContents from './overlayContents';
const { kakao } = window;

export default function makeMap(container, data) {
	const defaultLatLng = new kakao.maps.LatLng(36.390884093020325, 127.40080871739734);
	const options = {
		center: defaultLatLng,
		level: 4,
	};
	const kakaoMap = new kakao.maps.Map(container, options);
	kakaoMap.setMaxLevel(12);

	// const places = new kakao.maps.services.Places();

	// places.keywordSearch(data, placesSearchCB);

	// function placesSearchCB(data, status, pagination) {
	// 	if (status === kakao.maps.services.Status.OK) {
	// 		// 	const imageSrc = 'https://elice.school/elice-logo-symbol.png',
	// 		// 		imageSize = new kakao.maps.Size(40, 40),
	// 		// 		imageOption = { offset: new kakao.maps.Point(27, 69) };

	// 		// const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
	// 		let bounds = new kakao.maps.LatLngBounds();
	// 		for (let i = 0; i < data.length; i++) {
	// 			let marker = new kakao.maps.Marker({
	// 				map: kakaoMap,
	// 				position: new kakao.maps.LatLng(data[i].y, data[i].x),
	// 			});
	// 			let infowindow = new kakao.maps.InfoWindow({
	// 				zIndex: 1,
	// 				removable: true,
	// 			});

	// 			bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
	// 			kakao.maps.event.addListener(marker, 'click', function () {
	// 				infowindow.setContent(overlayContents(data[i]));
	// 				infowindow.open(kakaoMap, marker);
	// 			});
	// 			kakao.maps.event.addListener(kakaoMap, 'zoom_changed', function () {
	// 				if (kakaoMap.getLevel() > 8) {
	// 					infowindow.close();
	// 					marker.setMap(null);
	// 				}
	// 			});
	// 		}
	// 		kakaoMap.setBounds(bounds);
	// 	}
	// }

	return kakaoMap;
}
