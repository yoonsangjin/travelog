import overlayContents from './overlayContents';

const { kakao } = window;

export default function searchMap(kakaoMap, place, category) {
	let location = kakaoMap.getBounds().toString();
	console.log(location);
	const places = new kakao.maps.services.Places();
	const searchOptions = {};

	if (category) {
		places.categorySearch(category, categorySearchCB, {
			// Map 객체를 지정하지 않았으므로 좌표객체를 생성하여 넘겨준다.
			location: new kakao.maps.LatLng(location),
		});
		function categorySearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {
				let bounds = new kakao.maps.LatLngBounds();
				bounds.extend(new kakao.maps.LatLng(location));
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					let marker = new kakao.maps.Marker({
						map: kakaoMap,
						position: new kakao.maps.LatLng(data[i].y, data[i].x),
					});
					let infowindow = new kakao.maps.InfoWindow({
						zIndex: 1,
						removable: true,
					});
					kakao.maps.event.addListener(marker, 'click', function () {
						infowindow.setContent(overlayContents(data[i]));
						infowindow.open(kakaoMap, marker);
					});
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				kakaoMap.setBounds(bounds);
			}
		}
	} else {
		places.keywordSearch(place, keywordSearchCB, searchOptions);
		function keywordSearchCB(data, status, pagination) {
			console.log(data);
			if (status === kakao.maps.services.Status.OK) {
				let bounds = new kakao.maps.LatLngBounds();
				for (let i = 0; i < data.length; i++) {
					let marker = new kakao.maps.Marker({
						map: kakaoMap,
						position: new kakao.maps.LatLng(data[i].y, data[i].x),
					});
					let infowindow = new kakao.maps.InfoWindow({
						zIndex: 1,
						removable: true,
					});
					kakao.maps.event.addListener(marker, 'click', function () {
						infowindow.setContent(overlayContents(data[i]));
						infowindow.open(kakaoMap, marker);
					});
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				kakaoMap.setBounds(bounds);
				location = kakaoMap.getBounds().toString();
			}
		}
	}
}
