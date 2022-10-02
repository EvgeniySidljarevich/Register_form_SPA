import { Button } from "@material-ui/core";
import { config } from "../../../../lokales/en";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./styles";
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";

const { button } = config;

export const ButtonGo = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const state = useSelector((state: {[key:string]: any}) => state.registration.errors);
    const errors = Object.values(state);
    const isError = !!errors.find(item=>item);
    const isFormValid = useRef(false);
    console.log(isFormValid);


    useEffect(() => {
        if (!isError) {
            console.log("ошибок нет");
            isFormValid.current = true;
        } else {
            console.log("есть ошибка")
            isFormValid.current = false;
        }
    },[isError])


    const handleClick = () => {
        console.log(isFormValid)
        if (isFormValid.current) navigate("/PersonalInfo");
    };

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={handleClick}>
                {button.signUp}
            </Button>
        </div>
    );
};
