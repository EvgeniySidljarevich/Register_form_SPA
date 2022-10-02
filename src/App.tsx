import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {PersonInfoPage} from "./pages/personInfoPage";
import {RegistrationPage} from "./pages/registrationPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegistrationPage/>} />
                <Route path="/PersonalInfo" element={<PersonInfoPage/>} />
                <Route path="/*" element={<RegistrationPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
