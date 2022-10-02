import {ErrorActionType, SetActionType} from "./types";

// TYPES OF ACTIONS ==========================================================================
export const checkErrorName = "check_error_name";
export const checkErrorSurname = "check_error_surname";
export const checkErrorBirthday = "check_error_birthday";
export const checkErrorOcean = "check_error_ocean";
export const checkErrorHobby = "check_error_hobby";
export const setName = "set_name";
export const setSurname = "set_surname";
export const setSex = "set_sex";
export const setBirthday = "set_birthday";
export const setOcean = "set_ocean";
export const setHobby = "set_hobby";

// ACTIONS ===================================================================================
export const actionCheckErrorName = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorName,
        payload: isError,
    };
};

export const actionCheckErrorSurname = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorSurname,
        payload: isError,
    };
};

export const actionCheckErrorBirthday = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorBirthday,
        payload: isError,
    };
};

export const actionCheckErrorOcean = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorOcean,
        payload: isError,
    };
};

export const actionCheckErrorHobby = (isError: boolean): ErrorActionType => {
    return {
        type: checkErrorHobby,
        payload: isError,
    };
};

export const actionSetName = (value: string): SetActionType => {
    return {
        type: setName,
        payload: value,
    };
};

export const actionSetSurname = (value: string): SetActionType => {
    return {
        type: setSurname,
        payload: value,
    };
};

export const actionSetSex = (value: string): SetActionType => {
    return {
        type: setSex,
        payload: value,
    };
};

export const actionSetBirthday = (value: string): SetActionType => {
    return {
        type: setBirthday,
        payload: value,
    };
};

export const actionSetOcean = (value: string): SetActionType => {
    return {
        type: setOcean,
        payload: value,
    };
};

export const actionSetHobby = (value: string[]): SetActionType => {
    return {
        type: setHobby,
        payload: value,
    };
};