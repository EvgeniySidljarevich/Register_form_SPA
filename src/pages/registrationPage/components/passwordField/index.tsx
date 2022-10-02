import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { data } from "../../../../data";
import { config } from "../../../../lokales/en";
import { useCheckPass } from "../../../../hooks/registrationPage/useCheckPass";

const { placeholder } = config;

export const PasswordField = () => {
    const classes = useStyles();

    const { errorMessage, ref } = useCheckPass();

    return (
        <form className={classes.root} autoComplete="off">
            <TextField
                fullWidth
                error={!!errorMessage}
                helperText={errorMessage ? errorMessage : " "}
                inputRef={ref}
                placeholder={placeholder.enterPassword}
                type="password"
                required={data.password.required}
                id="mui-password"
                label="Password"
            />
        </form>
    );
};
