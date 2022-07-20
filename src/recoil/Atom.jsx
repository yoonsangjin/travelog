import { atom } from 'recoil';

export const placeState = atom({
	key: 'placeState',
	default: '',
});

export const mainInputValueState = atom({
	key: 'mainInputValueState',
	default: '',
});

export const extendbarState = atom({
	key: 'extendbarState',
	default: 'true',
});

export const bookmarkState = atom({
	key: 'bookmarkState',
	default: [],
});

export const bookmarkbarState = atom({
	key: 'bookmarkbarState',
	default: 'false',
});

export const bookmarkListState = atom({
	key: 'bookmarkListState',
	default: ['내 북마크', '북마크1'],
});


export const placeInfoState = atom({
	key: 'placeInfoState',
	default: '',
});

export const activeState = atom({
	key: 'placeInfoActiveState',
	default: 'false',
});

export const loginState = atom({
	key: 'loginState',
	default: Boolean(localStorage.getItem('token')),
});
