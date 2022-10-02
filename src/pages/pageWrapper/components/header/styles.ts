import styled from "styled-components";
import { screen } from "../../../../styles/variables";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

// MUI styles
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        container: {
            minHeight: "inherit",
        },
        header: {
            display: "flex",
            alignItems: "center",
        },
        breadcrumbs: {
            display: "flex",
            justifyContent: "center",
        }
    }),
);

// Styled-components styles
export const ComponentHeader = styled.div`
    position: fixed;
    top: 0;
    z-index: 5;
    width: 100%;
    min-height: 100px;
    background: linear-gradient(to bottom, #000066 5%, #0000cc 100%);

    @media (max-width: ${screen.lg}) {
        min-height: 80px;
    }

    & .header-title {
        flex-grow: 1;
        text-align: center;
        font-weight: 600;
        font-size: 30px;
        line-height: 135%;
        color: white;

        @media (max-width: ${screen.md}) {
            font-size: 20px;
        }
    }
`;
