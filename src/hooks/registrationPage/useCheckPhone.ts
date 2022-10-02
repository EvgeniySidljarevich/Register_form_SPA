import {FocusEvent, useCallback, useEffect, useRef, useState} from "react";
import {data} from "../../data";
import {useDispatch} from "react-redux";
import {actionCheckErrorPhone, actionSetNumberPhone} from "../../pages/registrationPage/redux/actions";

type BlurEventType = FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useCheckPhone = () => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const validate = data.mobilePhone;

    const onblurHandler = useCallback((event: BlurEventType) => {
        const isEmptyField = event.target.value === "+375-  -   -    ";
        const re = new RegExp(validate.regExp);
        const valueToString = event.target.value.split("-").join("");

        if (isEmptyField && validate.required) {
            dispatch(actionCheckErrorPhone(true));
            setErrorMessage("Field cannot be empty.");
        } else if (!isEmptyField) {
            if (!re.test(String(valueToString))) {
                dispatch(actionCheckErrorPhone(true));
                setErrorMessage("Incorrect entry.");
            } else {
                setErrorMessage("");
                dispatch(actionCheckErrorPhone(false));
                dispatch(actionSetNumberPhone(event.target.value));
            }
        }
    }, []);

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("blur", onblurHandler as () => void);
        }
    }, [onblurHandler]);

    return {errorMessage, ref}
}