import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { v4 as uuid4 } from "uuid";
import { config } from "../../../../lokales/en";
import { data } from "../../../../data";
import {useCheckName} from "../../../../hooks/personInfoPage/useCheckName";

const { placeholder, signature } = config;

export const NameField = () => {
    const classes = useStyles();

    const {errorMessage, onblurHandler, handleChange, inputValue} = useCheckName();

    return (
        <TextField
            error={!!errorMessage}
            helperText={errorMessage ? errorMessage : " "}
            id={uuid4().slice(0, 13)}
            className={classes.form}
            placeholder={placeholder.name}
            label={signature.name}
            variant="standard"
            required={data.firstName.required}
            fullWidth
            // InputLabelProps={{ shrink: true }}
            value={inputValue}
            onBlur={onblurHandler}
            onChange={handleChange}
        />
    );
};
