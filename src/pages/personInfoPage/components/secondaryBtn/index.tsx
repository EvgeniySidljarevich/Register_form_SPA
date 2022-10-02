import { Button } from "@material-ui/core";
import { useStyles } from "./styles";

type Props = {
    text: string;
    onClick: ()=>void;
}

export const SecondaryButton = ({text, onClick}: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={onClick}>
                {text}
            </Button>
        </div>
    );
};
