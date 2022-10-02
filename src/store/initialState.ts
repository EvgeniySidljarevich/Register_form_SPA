import {initialRegistrationState} from "../pages/registrationPage/redux/reducer";
import {initialProfileState} from "../pages/personInfoPage/redux/reducer";

export const initialState = {
    registration: initialRegistrationState,
    profileData: initialProfileState,
};