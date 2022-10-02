import { TextField } from "@material-ui/core";
import {useStyles} from "./styles";
import {v4 as uuid4} from "uuid";
import {config} from "../../../../lokales/en";
import { data } from "../../../../data";
import {useCheckSurname} from "../../../../hooks/personInfoPage/useCheckSurname";

const { placeholder, signature } = config;

export const SurnameField = () => {
    const classes = useStyles();

    const {errorMessage, onblurHandler, handleChange, inputValue} = useCheckSurname();

    return (
        <TextField
            error={!!errorMessage}
            helperText={errorMessage ? errorMessage : " "}
            id={uuid4().slice(0,13)}
            className={classes.form}
            placeholder={placeholder.surname}
            label={signature.surname}
            variant="standard"
            required={data.lastName.required}
            fullWidth
            value={inputValue}
            onBlur={onblurHandler}
            onChange={handleChange}
        />
    );
};
