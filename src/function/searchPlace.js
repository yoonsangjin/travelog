import overlayContents from './overlayContents';

export default function searchPlace(kakaoMap, place, category) {
	const { kakao } = window;
	let markers = [];
	const places = new kakao.maps.services.Places();
	const keywordSearchCB = (data, status, pagination) => {
		sessionStorage.setItem('searchData', JSON.stringify(data));
		console.log(JSON.parse(sessionStorage.getItem('searchData')));
		if (status === kakao.maps.services.Status.OK) {
			if (markers) {
				markers.map(marker => marker.setMap(null));
				markers = [];
			}
			const bounds = new kakao.maps.LatLngBounds();
			data.map(data => {
				bounds.extend(new kakao.maps.LatLng(data.y, data.x));
				let marker = new kakao.maps.Marker({
					position: new kakao.maps.LatLng(data.y, data.x),
				});
				markers.push(marker);
				markers.map(marker => marker.setMap(kakaoMap));
				let infowindow = new kakao.maps.InfoWindow({
					zIndex: 1,
					removable: true,
				});
				kakao.maps.event.addListener(marker, 'click', function () {
					infowindow.setContent(overlayContents(data));
					infowindow.open(kakaoMap, marker);
				});
				kakaoMap.setBounds(bounds);
			});
		}
	};
	const categorySearchCB = (data, status, pagination) => {
		if (status === kakao.maps.services.Status.OK) {
			sessionStorage.setItem('searchData', JSON.stringify(data));
			console.log(JSON.parse(sessionStorage.getItem('searchData')));
			if (markers) {
				markers.map(marker => marker.setMap(null));
				markers = [];
			}
			data.map(data => {
				let marker = new kakao.maps.Marker({
					position: new kakao.maps.LatLng(data.y, data.x),
				});
				markers.push(marker);
				markers.map(marker => marker.setMap(kakaoMap));
				let infowindow = new kakao.maps.InfoWindow({
					zIndex: 1,
					removable: true,
				});
				kakao.maps.event.addListener(marker, 'click', function () {
					infowindow.setContent(overlayContents(data));
					infowindow.open(kakaoMap, marker);
				});
			});
		}
	};

	places.keywordSearch(place, keywordSearchCB, {});

	kakao.maps.event.addListener(kakaoMap, 'tilesloaded', () => {
		if (category) {
			const sw = kakaoMap.getBounds().getSouthWest(),
				ne = kakaoMap.getBounds().getNorthEast();
			places.categorySearch(category, categorySearchCB, {
				bounds: new kakao.maps.LatLngBounds(sw, ne),
			});
		}
	});
}
