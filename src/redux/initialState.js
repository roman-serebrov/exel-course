import {defaulStyles, defaultTitle} from "@/constans";

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaulStyles,
    title: defaultTitle,
    openedDate: new Date().toJSON()
}

const normalize = state => ({
    ...state,
    currentStyles: defaulStyles,
    currentText: ''
})

// export const initialState = storage('excel-state')
//     ? normalize(storage('excel-state'))
//     : defaultState

export function normalizeInitialState(state) {
    return state ? normalize(state) : defaultState
}