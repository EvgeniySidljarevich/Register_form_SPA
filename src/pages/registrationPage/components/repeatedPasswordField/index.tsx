import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { data } from "../../../../data";
import {config} from "../../../../lokales/en";
import {useCheckRepdPass} from "../../../../hooks/registrationPage/useCheckRepdPass";

const { placeholder } = config;

export const RepeatedPasswordField = () => {
    const classes = useStyles();

    const {ref, errorMessage} = useCheckRepdPass();

    return (
        <form className={classes.root} autoComplete="off">
            <TextField
                error={!!errorMessage}
                helperText={errorMessage ? errorMessage : " "}
                inputRef={ref}
                placeholder={placeholder.repeatPassword}
                id="mui-repeat-password"
                type="password"
                required={data.password.required}
                label="Password"
            />
        </form>
    );
};
