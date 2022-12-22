import { atom } from "recoil";


export const daytsStateAtom = atom({
    key: 'daytsStateAtom',
    default: [],
})

export const userFormDataStateAtom = atom({
    key: 'userFormDataStateAtom',
    default: {
        firstName: '',
        lastName: '',
        userName: '',
        age: '',
        email: ''
    },
})


export const currentUserStateAtom = atom({
    key: 'currentUserStateAtom',
    default: null,
})

export const errorsStateAtom = atom({
    key: 'errorsStateAtom',
    default: [],
})

export const activitiesStateAtom = atom({
    key: 'activitiesStateAtom',
    default: [],
})

export const datesStateAtom = atom({
    key: 'datesStateAtom',
    default: [],
})