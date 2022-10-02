import {
    checkErrorBirthday,
    checkErrorHobby,
    checkErrorName,
    checkErrorOcean,
    checkErrorSurname,
    setBirthday,
    setHobby,
    setName,
    setOcean,
    setSex,
    setSurname,
} from "./actions";
import { ActionType, TypeProfileState } from "./types";
import {data} from "../../../data";

export const initialProfileState: TypeProfileState = {
    errors: {
        firstName: data.firstName.required,
        surname: data.lastName.required,
        birthday: data.birthday.required,
        ocean: data.ocean.required,
        hobby: data.hobby.required,
    },
    data: {
        firstName: "",
        surname: "",
        sex: "",
        birthday: "",
        ocean: "",
        hobby: [],
    },
};

export const profileDataReducer = (state = initialProfileState, action: ActionType) => {
    switch (action.type) {
        case checkErrorName:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    firstName: action.payload,
                },
            };
        case checkErrorSurname:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    surname: action.payload,
                },
            };
        case checkErrorBirthday:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    birthday: action.payload,
                },
            };
        case checkErrorOcean:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    ocean: action.payload,
                },
            };
        case checkErrorHobby:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    hobby: action.payload,
                },
            };
        case setName:
            return {
                ...state,
                data: {
                    ...state.data,
                    firstName: action.payload,
                },
            };
        case setSurname:
            return {
                ...state,
                data: {
                    ...state.data,
                    surname: action.payload,
                },
            };
        case setBirthday:
            return {
                ...state,
                data: {
                    ...state.data,
                    birthday: action.payload,
                },
            };
        case setSex:
            return {
                ...state,
                data: {
                    ...state.data,
                    sex: action.payload,
                },
            };
        case setOcean:
            return {
                ...state,
                data: {
                    ...state.data,
                    ocean: action.payload,
                },
            };
        case setHobby:
            return {
                ...state,
                data: {
                    ...state.data,
                    hobby: action.payload,
                },
            };
        default:
            return state;
    }
};