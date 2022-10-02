// action types =========================================================================
export type ErrorActionType = {
    type: string;
    payload: boolean;
};

export type SetActionType = {
    type: string;
    payload: string | string[];
};

export type ActionType = {
    type: string;
    payload: string | boolean | [];
};

export type TypeProfileState = {
    errors: {
        firstName: boolean,
        surname: boolean,
        birthday: boolean,
        ocean: boolean,
        hobby: boolean,
    },
    data: {
        firstName: string,
        surname: string,
        sex: string,
        birthday: string,
        ocean: string,
        hobby: [],
    },
};