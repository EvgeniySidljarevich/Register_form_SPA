import {FocusEvent, useCallback, useEffect, useRef, useState} from "react";
import { data } from "../../data";
import {useDispatch} from "react-redux";
import {actionCheckErrorEmail, actionSetEmail} from "../../pages/registrationPage/redux/actions";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckEmail = () => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const validate = data.email;

    const onblurHandler = useCallback((event: BlurEventType) => {
        const value = event.target.value;
        const re = new RegExp(validate.regExp);

        if (!value && validate.required) {
            dispatch(actionCheckErrorEmail(true));
            setErrorMessage("Field cannot be empty.");
        } else if (value) {
            if (!re.test(String(value).toLowerCase())) {
                dispatch(actionCheckErrorEmail(true));
                setErrorMessage("Incorrect entry.");
            } else {
                dispatch(actionCheckErrorEmail(false));
                dispatch(actionSetEmail(value));
                setErrorMessage("");
            }
        }
    }, []);

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("blur", onblurHandler as () => void);
        }
    }, [onblurHandler]);

    return {ref, errorMessage}
};