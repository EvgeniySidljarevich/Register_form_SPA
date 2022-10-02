import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            margin: theme.spacing(3),
            width: 200,
        },
    }),
);