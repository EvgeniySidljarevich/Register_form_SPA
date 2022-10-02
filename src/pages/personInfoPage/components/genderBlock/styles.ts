import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(3),
            "&  .MuiFormLabel-root, .Mui-focused Mui-required": {
                color: "black",
            },
            "&  .MuiFormGroup-root": {
                flexDirection: "row",
            },
        },
        label: {
            textAlign: "center",
        }
    }),
);
