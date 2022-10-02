import { PageWrapper } from "../pageWrapper";
import { SignUpBlock } from "./styles";
import { config } from "../../lokales/en";
import { PhoneField } from "./components/phoneField";
import { EmailField } from "./components/emailField";
import { PasswordField } from "./components/passwordField";
import { ButtonGo } from "./components/button";
import {RepeatedPasswordField} from "./components/repeatedPasswordField";

const { title } = config;

export const RegistrationPage = () => {

    return (
        <PageWrapper>
            <SignUpBlock>
                <h3>{title.signUp.toUpperCase()}</h3>
                <PhoneField />
                <EmailField />
                <PasswordField />
                <RepeatedPasswordField />
                <ButtonGo />
            </SignUpBlock>
        </PageWrapper>
    );
};
