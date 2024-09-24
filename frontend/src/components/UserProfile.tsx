import React from "react";

const UserProfile: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">User Profile</h2>
                {/* You can populate this with actual user data from context */}
                <p className="mb-2">Name: John Doe</p>
                <p className="mb-2">Email: johndoe@example.com</p>
                <p className="mb-2">Phone: +1234567890</p>
            </div>
        </div>
    );
};

export default UserProfile;
