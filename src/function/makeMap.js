const { kakao } = window;

<<<<<<< HEAD:src/function/MakeMap.js
export default function makeMap() {
	const container = document.getElementById('map');
	const options = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 4,
	};
	const kakaoMap = new kakao.maps.Map(container, options);

	kakaoMap.setMaxLevel(12);

	return kakaoMap;
=======
    kakaoMap.setMaxLevel(12);
        
    return kakaoMap;
>>>>>>> e2bbf38e0393f90a83d9baff1a906a7320919618:src/function/makeMap.js
}
