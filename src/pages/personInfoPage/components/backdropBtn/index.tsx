import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import {useStyles, PopUp} from "./styles";
import {config} from "../../../../lokales/en";
import {useSelector} from "react-redux";

const { button, title } = config;

export const SimpleBackdrop = () => {
    const data = useSelector((state: {[key:string]:any}) => state.profileData.data);
    const errorArr = useSelector((state: {[key:string]:any}) => Object.values(state.profileData.errors));
    const isError = errorArr.find(i => i);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        if (!isError) setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={handleToggle}>
                {button.complete}
            </Button>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <PopUp>
                    <h3>{title.welcome}</h3>
                    <div className="personal-data">
                        <ul>
                            <li>
                                <span className="signature">Name:</span>
                                <span className="value">{data.firstName || "-"}</span>
                            </li>
                            <li>
                                <span className="signature">Surname:</span>
                                <span className="value">{data.surname || "-"}</span>
                            </li>
                            <li>
                                <span className="signature">Birthday:</span>
                                <span className="value">{data.birthday.split("-").reverse().join("-") || "-"}</span>
                            </li>
                            <li>
                                <span className="signature">Gender:</span>
                                <span className="value">{data.sex}</span>
                            </li>
                            <li>
                                <span className="signature">Favorite ocean:</span>
                                <span className="value">{data.ocean || "-"}</span>
                            </li>
                            <li>
                                <span className="signature">Hobby:</span>
                                <span className="value">{data.hobby.join(", ") || "-"}</span>
                            </li>
                        </ul>
                    </div>
                </PopUp>
            </Backdrop>
        </div>
    );
}
