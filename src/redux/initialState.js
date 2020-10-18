import {storage} from "@core/utils";
import {defaulStyles, defaultTitle} from "@/constans";

const defaultState = {
    rowState: {},
    colState: {},
    dataState: {},
    stylesState: {},
    currentText: '',
    currentStyles: defaulStyles,
    title: defaultTitle
}

const normalize = state => ({
    ...state,
    currentStyles: defaulStyles,
    currentText: ''
})

export const initialState = storage('excel-state')
    ? normalize(storage('excel-state'))
    : defaultState