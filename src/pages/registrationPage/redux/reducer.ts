import {data} from "../../../data";

import {
    checkErrorEmail,
    checkErrorPassword,
    checkErrorPhone,
    checkErrorSecondPassword, setEmail,
    setNumberPhone, setPassword, setSecondPassword
} from "./actions";
import {ActionType, TypeRegistrationState} from "./types";


export const initialRegistrationState: TypeRegistrationState = {
    errors: {
        phoneNum: data.mobilePhone.required,
        email: data.email.required,
        password: data.password.required,
        secondPassword: data.password.required,
    },
    data: {
        phoneNum: "",
        email: "",
        password: "",
        secondPassword: "",
    },
};

export const registrationReducer = (state = initialRegistrationState, action: ActionType) => {
    switch (action.type) {
        case checkErrorPhone:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    phoneNum: action.payload,
                }
            };
        case checkErrorEmail:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    email: action.payload,
                }
            };
        case checkErrorPassword:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    password: action.payload,
                }
            };
        case checkErrorSecondPassword:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    secondPassword: action.payload,
                }
            };
        case setNumberPhone:
            return {
                ...state,
                data: {
                    ...state.data,
                    phoneNum: action.payload,
                },
            };
        case setEmail:
            return {
                ...state,
                data: {
                    ...state.data,
                    email: action.payload,
                },
            };
        case setPassword:
            return {
                ...state,
                data: {
                    ...state.data,
                    password: action.payload,
                },
            };
        case setSecondPassword:
            return {
                ...state,
                data: {
                    ...state.data,
                    secondPassword: action.payload,
                },
            };
        default: return state;
    }
};