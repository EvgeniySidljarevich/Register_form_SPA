import { ChangeEvent, FocusEvent, useState } from "react";
import {useDispatch} from "react-redux";
import {actionCheckErrorOcean, actionSetOcean} from "../../pages/personInfoPage/redux/actions";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;
type ChangeEventType = ChangeEvent<{ value: unknown }>;
type ValidateType = {
    [key: string]: any;
};

export const useCheckSelect = (validate: ValidateType) => {
    const dispatch = useDispatch();

    const [myOcean, setOcean] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onblurHandler = (event: BlurEventType) => {
        const value = event.target.value;

        if (validate.required) {
            if (!value) {
                dispatch(actionCheckErrorOcean(true));
                setErrorMessage("Field cannot be empty.");
            } else {
                dispatch(actionCheckErrorOcean(false));
                setErrorMessage("");
            }
        }

    };

    const handleChange = (event: ChangeEventType) => {
        setOcean(event.target.value as string);
        dispatch(actionSetOcean(event.target.value as string));
    };

    return { myOcean, errorMessage, handleChange, onblurHandler };
};