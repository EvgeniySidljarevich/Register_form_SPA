import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

// MUI styles
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
            "& > .MuiButtonBase-root, .MuiButton-root, .MuiButton-contained": {
                background:
                    "linear-gradient(to bottom, #000066 5%, #0000cc 100%)",
            },
            "& > .MuiBackdrop-root, .makeStyles-backdrop-51": {
                backgroundColor: "rgba(0,12,49,0.75)",
            },
            "& .MuiButton-label": {
                color: "white",
            },
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
        },
    }),
);

export const PopUp = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    width: 100%;
    background: #F8EDE3;
  border: 3px solid #D0B8A8;
    border-radius: 16px;
  
  h3 {
    margin: 0 0 20px ;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 139%;
  }
  
  ul {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 10px;
  }
  
  li {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    padding: 3px 10px;
    background: #DFD3C3;
    border: 3px solid #D0B8A8;
    border-radius: 8px;
  }
`;
