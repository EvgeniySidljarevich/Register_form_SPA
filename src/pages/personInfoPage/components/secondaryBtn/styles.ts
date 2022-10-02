import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
            "& .MuiButton-label": {
                color: "white",
            },
            "& > .MuiButtonBase-root, .MuiButton-root MuiButton-contained, .MuiButton-containedPrimary": {
                background: "linear-gradient(to bottom, #000066 5%, #0000cc 100%)",
            }
        },
    }),
);