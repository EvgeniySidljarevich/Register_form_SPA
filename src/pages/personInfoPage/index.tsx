import { PageWrapper } from "../pageWrapper";
import { ProfileBlock, useStyles } from "./styles";
import { Grid } from "@material-ui/core";
import { NameField } from "./components/nameField";
import { config } from "../../lokales/en";
import { GenderBlock } from "./components/genderBlock";
import { DateBlock } from "./components/dateBlock";
import { OceanBlock } from "./components/oceanBlock";
import { CheckboxesGroup } from "./components/hobbyBlock";
import { SecondaryButton } from "./components/secondaryBtn";
import { useNavigate } from "react-router-dom";
import { SurnameField } from "./components/surnameField";
import { SimpleBackdrop } from "./components/backdropBtn";

const { button } = config;

export const PersonInfoPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <ProfileBlock className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <NameField />
                    </Grid>
                    <Grid item xs={12}>
                        <SurnameField />
                    </Grid>
                    <Grid container item xs={12} sm={6} justifyContent="center">
                        <GenderBlock />
                    </Grid>
                    <Grid container item xs={12} sm={6} justifyContent="center">
                        <DateBlock />
                    </Grid>
                    <Grid container item xs={12} sm={6} justifyContent="center">
                        <OceanBlock />
                    </Grid>
                    <Grid container item xs={12} sm={6} justifyContent="center">
                        <CheckboxesGroup />
                    </Grid>
                    <Grid container item xs={12} sm={6} justifyContent="center">
                        <SecondaryButton
                            text={button.changeSignUp}
                            onClick={() => navigate("/")}
                        />
                    </Grid>
                    <Grid container item xs={12} sm={6} justifyContent="center">
                        <SimpleBackdrop />
                    </Grid>
                </Grid>
            </ProfileBlock>
        </PageWrapper>
    );
};
