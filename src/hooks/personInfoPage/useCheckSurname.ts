import {ChangeEvent, FocusEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {actionCheckErrorSurname, actionSetSurname} from "../../pages/personInfoPage/redux/actions";
import {data} from "../../data";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckSurname = () => {
    const validate = data.lastName;
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onblurHandler = (event: BlurEventType) => {
        const value = event.target.value;

        if (!value && validate.required) {
            dispatch(actionCheckErrorSurname(true));
            setErrorMessage("Field cannot be empty.");
        } else if (value) {
            if (!(+validate.minLength <= value.length && value.length <= +validate.maxLength)) {
                setErrorMessage(`The name should contain from ${validate.minLength} to ${validate.maxLength} characters.`);
                dispatch(actionCheckErrorSurname(true));
            } else {
                dispatch(actionSetSurname(value));
                dispatch(actionCheckErrorSurname(false));
                setErrorMessage("");
            }
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return {errorMessage, onblurHandler, handleChange, inputValue}
}