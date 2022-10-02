import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import HomeIcon from "@material-ui/icons/Home";
import { Typography, Breadcrumbs } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { useStyles } from "./styles";

export const BreadcrumbsBlock = () => {
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((item) => item);
    const classes = useStyles();

    return (
        <Breadcrumbs
            className={classes.root}
            separator=">"
            aria-label="breadcrumb"
        >
            {pathNames.length > 0 ? (
                <Link to="/">
                    <HomeIcon className={classes.icon} />
                    SignUpInfo
                </Link>
            ) : (
                <Typography color="textPrimary" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    SignUpInfo
                </Typography>
            )}
            {pathNames.map((item, index) => {
                const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathNames.length - 1;
                return isLast ? (
                    <Typography color="textPrimary" className={classes.link} key={uuidv4()}>
                        <PersonIcon color="inherit" className={classes.icon} />
                        {item}
                    </Typography>
                ) : (
                    <Link to={routeTo} key={uuidv4()}>
                        <PersonIcon className={classes.icon} />
                        {item}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};