import { atom } from 'recoil';

// 장소 API 결과값 배열
export const placeState = atom({
	key: 'placeState',
	default: '',
});

// 간단한 place info
export const placeInfoState = atom({
	key: 'placeInfoState',
	default: '',
});

// detail info 창에 뿌릴 데이터
export const detailInfoState = atom({
	key: 'detailInfoState',
	default: '',
});

export const mainInputValueState = atom({
	key: 'mainInputValueState',
	default: '',
});

export const extendbarState = atom({
	key: 'extendbarState',
	default: false,
});

export const addBookmarkState = atom({
	key: 'addBookmarkState',
	default: false,
});

// bookmark에 저장될 data
export const bookmarkState = atom({
	key: 'bookmarkState',
	default: [],
});

export const bookmarkSetState = atom({
	key: 'bookmarkSetState',
	default: {
		"bookmarkName": "대전 여행",
		"data":
		[
			{
			"bookmarkMemo": "1일차 방문할 관광지",
			"placeName":"카카오프렌즈 코엑스점",
			"placeUrl":"http://place.map.kakao.com/26338954",
			"categoryName":"가정,생활 > 문구,사무용품 > 디자인문구 > 카카오프렌즈",
			"addressName":"서울 강남구 삼성동 159",
			"roadAddressName":"서울 강남구 영동대로 513",
			"bookmarkId":"26338954",
			"phone":"02-6002-1880",
			"categoryGroupCode":"",
			"categoryGroupName":"",
			"x":"127.05902969025047",
			"y":"37.51207412593136"
			},
			{
			"bookmarkMemo": "2일차 방문할 관광지",
			"placeName":"카카오프렌즈 코엑스점",
			"placeUrl":"http://place.map.kakao.com/26338954",
			"categoryName":"가정,생활 > 문구,사무용품 > 디자인문구 > 카카오프렌즈",
			"addressName":"서울 강남구 삼성동 159",
			"roadAddressName":"서울 강남구 영동대로 513",
			"bookmarkId":"26338954",
			"phone":"02-6002-1880",
			"categoryGroupCode":"",
			"categoryGroupName":"",
			"x":"127.05902969025047",
			"y":"37.51207412593136"
			},
			{
			"bookmarkMemo": "3일차 방문할 관광지",
			"placeName":"카카오프렌즈 코엑스점",
			"placeUrl":"http://place.map.kakao.com/26338954",
			"categoryName":"가정,생활 > 문구,사무용품 > 디자인문구 > 카카오프렌즈",
			"addressName":"서울 강남구 삼성동 159",
			"roadAddressName":"서울 강남구 영동대로 513",
			"bookmarkId":"26338954",
			"phone":"02-6002-1880",
			"categoryGroupCode":"",
			"categoryGroupName":"",
			"x":"127.05902969025047",
			"y":"37.51207412593136"
			}
		]
	},
});

export const bookmarkListState = atom({
	key: 'bookmarkListState',
	default: ['내 여행', '부산여행'],
});

export const handleInputState = atom({
	key: 'handleInputState',
	default: '',
});

export const bookmarkbarState = atom({
	key: 'bookmarkbarState',
	default: true,
});

export const showBmListState = atom({
	key: 'showBmListState',
	default: false,
});

// bookmark info창 controller
export const viewDetailState = atom({
	key: 'ViewDetailState',
	default: true,
});

// detail info창 활성화
export const activeState = atom({
	key: 'placeInfoActiveState',
	default: 'false',
});

export const loginState = atom({
	key: 'loginState',
	default: Boolean(localStorage.getItem('token')),
});

export const iconMenuState = atom({
	key: 'iconMenuState',
	default: false,
});
