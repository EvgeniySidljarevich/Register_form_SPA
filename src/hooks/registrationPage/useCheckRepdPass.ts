import {FocusEvent, useCallback, useEffect, useRef, useState} from "react";
import { data } from "../../data";
import {useDispatch, useSelector} from "react-redux";
import { actionErrorSecondPassword} from "../../pages/registrationPage/redux/actions";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckRepdPass = () => {
    const dispatch = useDispatch();
    const validate = data.password;

    const password = useSelector((state: { [key: string]: any }) => state.registration.data);
    const ref = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState("");

    const onblurHandler = useCallback((event: BlurEventType) => {
        const value = event.target.value;

        if (!value && validate.required) {
            dispatch(actionErrorSecondPassword(true));
            setErrorMessage("Field cannot be empty.");
        } else if (value) {
            if (!(value === password.password)) {
                dispatch(actionErrorSecondPassword(true));
                setErrorMessage("Passwords don't match.");
            } else {
                dispatch(actionErrorSecondPassword(false));
                setErrorMessage("");
            }
        }
    }, [password]);

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("blur", onblurHandler as () => void);
        }
    }, [onblurHandler]);

    return { ref, errorMessage };
};