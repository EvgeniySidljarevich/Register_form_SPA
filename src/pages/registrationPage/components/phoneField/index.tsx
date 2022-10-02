import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { config } from "../../../../lokales/en";
import { useStyles } from "./styles";
import { data } from "../../../../data";
import {TextMaskCustom} from "./textMaskCustom";
import {FormHelperText} from "@material-ui/core";
import {useCheckPhone} from "../../../../hooks/registrationPage/useCheckPhone";

const { signature } = config;

export const PhoneField = () => {
    const classes = useStyles();

    const {ref, errorMessage} = useCheckPhone();

    return (
        <div className={classes.root}>
            <FormControl error={!!errorMessage} >
                <InputLabel
                    required={data.mobilePhone.required}
                    htmlFor="formatted-text-mask-input"
                >
                    {signature.phoneNumber}
                </InputLabel>
                <Input
                    inputRef={ref}
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom as any}
                />
                {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
            </FormControl>
        </div>
    );
};
