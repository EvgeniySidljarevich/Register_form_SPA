import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: "225px",
            width: "100%",
            '& .MuiFormControl-root': {
                width: "100%",
            },
        },
    }),
);
