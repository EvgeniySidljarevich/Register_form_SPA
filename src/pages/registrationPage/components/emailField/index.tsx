import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { data } from "../../../../data";
import { config } from "../../../../lokales/en";
import { useCheckEmail } from "../../../../hooks/registrationPage/useCheckEmail";

const { signature, placeholder } = config;

export const EmailField = () => {
    const classes = useStyles();

    const { ref, errorMessage } = useCheckEmail();

    return (
        <form className={classes.root}>
            <TextField
                error={!!errorMessage}
                helperText={errorMessage ? errorMessage : " "}
                inputRef={ref}
                placeholder={placeholder.email}
                type="email"
                required={data.email.required}
                id="standard-name"
                label={signature.email}
            />
        </form>
    );
};
