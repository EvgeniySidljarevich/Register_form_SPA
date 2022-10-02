import {combineReducers} from "redux";
import {registrationReducer} from "../pages/registrationPage/redux/reducer";
import {profileDataReducer} from "../pages/personInfoPage/redux/reducer";

export const reducer = combineReducers({
    registration: registrationReducer,
    profileData: profileDataReducer,
})