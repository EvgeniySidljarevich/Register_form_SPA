import {ChangeEvent, FocusEvent, useState} from "react";
import { useDispatch } from "react-redux";
import {
    actionCheckErrorName,
    actionSetName,
} from "../../pages/personInfoPage/redux/actions";
import { data } from "../../data";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckName = () => {
    const validate = data.firstName;
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onblurHandler = (event: BlurEventType) => {
        const value = event.target.value;

        if (!value && validate.required) {
            dispatch(actionCheckErrorName(true));
            setErrorMessage("Field cannot be empty.");
        } else if (value) {
            if (!(+validate.minLength <= value.length && value.length <= +validate.maxLength)) {
                setErrorMessage(`The name should contain from ${validate.minLength} to ${validate.maxLength} characters.`);
                dispatch(actionCheckErrorName(true));
            } else {
                setErrorMessage("");
                dispatch(actionCheckErrorName(false));
                dispatch(actionSetName(value));
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return { errorMessage, onblurHandler, handleChange, inputValue };
};