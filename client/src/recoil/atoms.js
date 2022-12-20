import { atom } from "recoil";


export const daytsState = atom({
    key: 'daytsState',
    default: [],
})

export const userFormDataState = atom({
    key: 'userFormDataState',
    default: {
        firstName: '',
        lastName: '',
        userName: '',
        age: '',
        email: ''
    },
})


export const currentUserState = atom({
    key: 'currentUserState',
    default: null,
})

export const errorsState = atom({
    key: 'errorsState',
    default: [],
})