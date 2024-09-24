import React from "react";
import { useAuth } from "../context/AuthContext";

const UserProfile: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <div>Please log in to view your profile.</div>;
    }

    return (
        <div>
            <h2>Welcome, User!</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserProfile;
