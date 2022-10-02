import { TextField } from "@material-ui/core";
import { useStyles } from "./styles";
import { config } from "../../../../lokales/en";
import { data } from "../../../../data";
import {useCheckDate} from "../../../../hooks/personInfoPage/useCheckDate";

const { signature } = config;

export const DateBlock = () => {
    const validate = data.birthday;
    const classes = useStyles();
    const {date, errorMessage, onblurHandler, handleChange} = useCheckDate(validate);

    return (
        <TextField
            error={!!errorMessage}
            helperText={errorMessage ? errorMessage : " "}
            id="datetime-local"
            required={data.birthday.required}
            label={signature.birthday}
            type="date"
            value={date}
            className={classes.textField}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={handleChange}
            onBlur={onblurHandler}
        />
    );
};
