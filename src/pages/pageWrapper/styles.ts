import styled from "styled-components";
import { screen } from "../../styles/variables";



// Styled-components styles
export const ComponentWrapper = styled.div`
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 100px 0 100px;
    min-height: inherit;
    background: center/cover
        url("https://funart.pro/uploads/posts/2021-04/1618538632_39-funart_pro-p-oboi-fon-glubokii-sinii-39.jpg")
        no-repeat;

    @media (max-width: ${screen.lg}) {
        padding: 80px 0 80px;
    }

    // Container
    & .main-container {
        margin: 0 auto;
        padding: 24px;
        flex: 1 1 auto;
        max-width: 960px;
        width: 100%;
    }

    // Breadcrumbs
    nav > ol {
        justify-content: center;
        color: #bfbfbf;
    }

    nav a {
        display: flex;
    }
`;
