import { atom } from 'recoil';

export const placeState = atom({
    key: 'placeState',
    default: '',
});

export const mainInputValueState = atom({
    key: 'mainInputValueState',
    default: '',
})

export const extendbarState = atom({
    key: 'extendbarState',
    default: '',
});

export const customState = atom({
    key: 'customState',
    default: 'false',
});

export const centerState = atom({
    key: 'centerState',
    default: 'false',
});
