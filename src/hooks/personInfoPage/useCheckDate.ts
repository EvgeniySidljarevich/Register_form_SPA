import { ChangeEvent, FocusEvent, useState } from "react";
import {useDispatch} from "react-redux";
import {actionCheckErrorBirthday, actionSetBirthday} from "../../pages/personInfoPage/redux/actions";

type ValidateType = {
    [key: string]: any;
};
type blurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckDate = (validate: ValidateType) => {
    const dispatch = useDispatch();
    const minAge = +validate.minAge * 365 * 24 * 60 * 60 * 1000;
    const maxAge = +validate.maxAge * 365 * 24 * 60 * 60 * 1000;
    const today = new Date().getTime();

    const [date, setDate] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onblurHandler = (event: blurEventType) => {
        const value = event.target.value;
        const birthDate = new Date(value).getTime();

        if (!value && validate.required) {
            setErrorMessage("Field cannot be empty.");
            dispatch(actionCheckErrorBirthday(true));
        } else if (value) {
            if (!(today - minAge > birthDate && today - maxAge < birthDate)) {
                setErrorMessage(
                    `You must be between ${validate.minAge} and ${validate.maxAge} years old.`,
                );
                dispatch(actionCheckErrorBirthday(true));
            } else {
                setErrorMessage("");
                dispatch(actionCheckErrorBirthday(false));
                dispatch(actionSetBirthday(value));
            }
        }

    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    return { date, errorMessage, onblurHandler, handleChange };
};
