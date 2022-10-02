import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// MUI styles
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: "0",
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
    }),
);

// Styled-components styles
export const ProfileBlock = styled.div`
    padding: 20px;
    border: 4px solid rgba(117, 117, 117, 0.45);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.54);
`;