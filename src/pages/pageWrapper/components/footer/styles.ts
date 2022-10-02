import styled from "styled-components";
import {screen} from "../../../../styles/variables";
import {createStyles, makeStyles, Theme} from "@material-ui/core";

// MUI styles
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        container: {
            display: "flex",
            alignItems: "center",
            minHeight: "inherit",
        },
    }),
);

// Styled-components styles
export const ComponentFooter = styled.div`
  position: fixed;
  bottom: 0;
    width: 100%;
  min-height: 100px;
  background: linear-gradient(to top, #000066 5%, #0000cc 100%);
  
  @media (max-width: ${screen.lg}) {
    min-height: 80px;
  }
`;