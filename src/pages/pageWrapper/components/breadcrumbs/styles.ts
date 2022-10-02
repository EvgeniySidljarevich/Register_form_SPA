import {createStyles, makeStyles, Theme} from "@material-ui/core";

// MUI styles
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& a": {
                display: 'flex',
            },
            color: "rgba(255,255,255,0.54)",
        },
        link: {
            display: 'flex',
        },
        icon: {
            marginRight: theme.spacing(0.5),
            width: 20,
            height: 20,
            color: "inherit",
        },
    }),
);