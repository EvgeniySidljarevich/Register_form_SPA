// action types =========================================================================
export type ErrorActionType = {
    type: string;
    payload: boolean;
};

export type SetActionType = {
    type: string;
    payload: string;
};

export type ActionType = {
    type: string;
    payload: string | boolean;
};

export type TypeRegistrationState = {
    errors: {
        phoneNum: boolean,
        email: boolean,
        password: boolean,
        secondPassword: boolean,
    },
    data: {
        phoneNum: string,
        email: string,
        password: string,
        secondPassword: string,
    },
};