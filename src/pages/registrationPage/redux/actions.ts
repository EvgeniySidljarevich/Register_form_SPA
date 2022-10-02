import {ErrorActionType, SetActionType} from "./types";

// TYPES OF ACTIONS ==========================================================================
export const checkErrorPhone = "check_error_phone";
export const checkErrorEmail = "check_error_email";
export const checkErrorPassword = "check_error_password";
export const checkErrorSecondPassword = "check_error_second_password";
export const setNumberPhone = "set_number_phone";
export const setEmail = "set_email";
export const setPassword = "set_password";
export const setSecondPassword = "set_second_password";

// ACTIONS ===================================================================================
export const actionCheckErrorPhone = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorPhone,
        payload: isError,
    };
};

export const actionCheckErrorEmail = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorEmail,
        payload: isError,
    };
};

export const actionCheckErrorPassword = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorPassword,
        payload: isError,
    };
};

export const actionErrorSecondPassword = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorSecondPassword,
        payload: isError,
    };
};

export const actionSetNumberPhone = (value: string): SetActionType => {
    return {
        type: setNumberPhone,
        payload: value,
    };
};

export const actionSetEmail = (value: string): SetActionType => {
    return {
        type: setEmail,
        payload: value,
    };
};

export const actionSetPassword = (value: string): SetActionType => {
    return {
        type: setPassword,
        payload: value,
    };
};

export const actionSetSecondPassword = (value: string): SetActionType => {
    return {
        type: setSecondPassword,
        payload: value,
    };
};