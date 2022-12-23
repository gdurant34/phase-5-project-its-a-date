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

export const activityFormDataStateAtom = atom({
    key: 'activityFormDataStateAtom',
    default: {
        title: '',
        category: '',
        location: '',
        description: '',
        image: '',
        estPrice: '',
        userId: '',
        relationshipId: ''
    },
})

export const dateFormDataStateAtom = atom({
    key: 'dateFormDataStateAtom',
    default: {
        time: '',
        location: '',
        confirmed: '',
        category: '',
        userId: '',
        relationshipId: ''
    },
})

export const relationshipFormDataStateAtom = atom({
    key: 'relationshipFormDataStateAtom',
    default: {
        relationshipType: '',
        name: '',
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

export const relationshipsStateAtom = atom({
    key: 'relationshipsStateAtom',
    default: [],
})

// modals open/close

export const userModalStateAtom = atom({
    key: 'userModalStateAtom',
    default: false,
})

export const activityModalStateAtom = atom({
    key: 'activityModalStateAtom',
    default: false,
})

export const dateModalStateAtom = atom({
    key: 'dateModalStateAtom',
    default: false, 
})

export const relationshipModalStateAtom = atom({
    key: 'relationshipModalStateAtom',
    default: false, 
})

// dropdown state




