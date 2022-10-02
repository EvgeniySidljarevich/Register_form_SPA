import {FocusEvent, useCallback, useEffect, useRef, useState} from "react";
import { data } from "../../data";
import {useDispatch} from "react-redux";
import {actionCheckErrorPassword, actionSetPassword} from "../../pages/registrationPage/redux/actions";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckPass = () => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);
    const validate = data.password;
    const [errorMessage, setErrorMessage] = useState("");

    const onblurHandler = useCallback((event: BlurEventType) => {
        const value = event.target.value;

        if (!value && validate.required) {
            dispatch(actionCheckErrorPassword(true));
            setErrorMessage("Field cannot be empty.");
        } else if (value) {
            if (!(+validate.minLength <= value.length && value.length <= +validate.maxLength)) {
                setErrorMessage(`The password should contain from ${validate.minLength} to ${validate.maxLength} characters.`);
                dispatch(actionCheckErrorPassword(true));
            } else {
                dispatch(actionCheckErrorPassword(false));
                dispatch(actionSetPassword(value));
                setErrorMessage("");
            }
        }
    }, []);

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("blur", onblurHandler as () => void);
        }
    }, [onblurHandler]);

    return { errorMessage, ref };
};