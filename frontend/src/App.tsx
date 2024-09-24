import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";
import SignupForm from "./components/SignupForm";
const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/user" element={<UserProfile />} />
                    <Route path="/signup" element={<SignupForm />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
