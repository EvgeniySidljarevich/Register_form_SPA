import {FormHelperText, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { v4 as uuidv4 } from 'uuid';
import { config } from "../../../../lokales/en";
import { useStyles } from "./styles";
import { data } from "../../../../data";
import {useCheckSelect} from "../../../../hooks/personInfoPage/useCheckSelect";

const { signature, text } = config;

export const OceanBlock = () => {
    const classes = useStyles();
    const { ocean } = data;
    const {myOcean, errorMessage, onblurHandler, handleChange} = useCheckSelect(ocean);


    return (
        <div className={classes.container}>
            <Typography>{text.chooseOcean}</Typography>
            <FormControl className={classes.formControl} error={!!errorMessage}>
                <InputLabel
                    required={data.ocean.required}
                    id="demo-simple-select-label"
                >
                    {signature.ocean}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={myOcean}
                    onChange={handleChange}
                    onBlur={(e) => onblurHandler(e)}
                >
                    {ocean.oneOf.map((item) => {
                        return (
                            <MenuItem value={item} key={uuidv4()}>
                                {item}
                            </MenuItem>
                        );
                    })}
                </Select>
                {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
            </FormControl>
        </div>
    );
};
