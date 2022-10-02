import {ChangeEvent, useEffect, useState} from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useStyles } from "./styles";
import { data } from "../../../../data";
import { config } from "../../../../lokales/en";
import {useDispatch} from "react-redux";
import {actionSetSex} from "../../redux/actions";

const {signature} = config;

export const GenderBlock = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const [sex, setSex] = useState("Female");

    useEffect(() => {
        dispatch(actionSetSex(sex));
    },[dispatch, sex])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSex((event.target as HTMLInputElement).value);
    };

    return (
        <FormControl
            className={classes.root}
            component="fieldset"
            focused
            required={data.sex.required}
            size="small"
        >
            <FormLabel className={classes.label} component="legend">
                Gender
            </FormLabel>
            <RadioGroup
                aria-label="gender"
                name="gender1"
                value={sex}
                onChange={handleChange}
            >
                <FormControlLabel
                    value={signature.female}
                    control={<Radio />}
                    label={signature.female}
                />
                <FormControlLabel
                    value={signature.male}
                    control={<Radio />}
                    label={signature.male}
                />
            </RadioGroup>
        </FormControl>
    );
};
