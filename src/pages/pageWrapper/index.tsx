import React, { ReactNode } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ComponentWrapper, Main } from "./styles";

type Props = {
    children: ReactNode;
};

export const PageWrapper = ({ children }: Props) => {

    return (
        <ComponentWrapper>
            <Header />
            <Main>
                <div className="main-container">
                    {children}
                </div>
            </Main>
            <Footer />
        </ComponentWrapper>
    );
};
