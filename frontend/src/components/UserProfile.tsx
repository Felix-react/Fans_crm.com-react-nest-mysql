import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useAuth } from '../context/AuthContext';

// Define the structure of your decoded JWT token
interface DecodedToken {
  sub: string; // Assuming 'sub' is the user ID
  name?: string; // Other optional fields you might have in your token
}

// Define the structure of your user data
interface UserData {
  name: string;
  email: string;
  phone: string;
}

const UserProfile: React.FC = () => {
  const { isAuthenticated, token } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null); // UserData type or null
  const [error, setError] = useState<string | null>(null); // Error handling

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated && token) {
        try {
          // Decode the JWT token to extract user ID
          const decoded: DecodedToken = jwtDecode<DecodedToken>(token); // Use typed jwtDecode
          const userId = decoded.sub;

          const response = await axios.get(
            `http://localhost:8081/api/v1/${userId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          setUserData(response.data);
        } catch (err) {
          console.error('Failed to fetch user data', err);
          setError('Failed to fetch user data');
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated, token]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">User Profile</h2>
        {userData ? (
          <>
            <p className="mb-2">Name: {userData.name}</p>
            <p className="mb-2">Email: {userData.email}</p>
            <p className="mb-2">Phone: {userData.phone}</p>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default UserProfile;
