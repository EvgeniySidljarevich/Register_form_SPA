import {ChangeEvent, useEffect, useState} from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import { data } from "../../../../data";
import { v4 as uuid4 } from "uuid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./styles";
import { config } from "../../../../lokales/en";
import { getHobbiesObj } from "../../../../utils/getHobbiesObj";
import {getHobbiesArr} from "../../../../utils/getHobbiesArr";
import {useDispatch} from "react-redux";
import {actionCheckErrorHobby, actionSetHobby} from "../../redux/actions";

const { signature, text } = config;

export const CheckboxesGroup = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const hobbies = data.hobby.anyOf;
    const validate = data.hobby.required;

    const [myHobby, setHobby] = useState(getHobbiesObj(hobbies));
    const [error, setError] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setHobby({ ...myHobby, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        dispatch(actionSetHobby(getHobbiesArr(myHobby)));

        const valuesArray = Object.values(myHobby);
        const isChoose = valuesArray.find(elem => elem);

        if (validate) {
            if (isChoose) {
                dispatch(actionCheckErrorHobby(false));
                setError(false);
            } else {
                dispatch(actionCheckErrorHobby(true));
                setError(true);
            }
        }
    },[handleChange])

    return (
        <div className={classes.root}>
            <FormControl
                error={error}
                component="fieldset"
                className={classes.formControl}
            >
                <FormLabel required={data.hobby.required} component="legend">
                    {signature.hobby}
                </FormLabel>
                <FormGroup>
                    {hobbies.map((item) => {
                        return (
                            <FormControlLabel
                                control={<Checkbox
                                        checked={myHobby[item]}
                                        onChange={handleChange}
                                        name={item}
                                        />
                                }
                                label={item}
                                key={uuid4()}
                            />
                        );
                    })}
                </FormGroup>
                <FormHelperText>{text.severalOptions}</FormHelperText>
            </FormControl>
        </div>
    );
};
