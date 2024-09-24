import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/v1/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password, phone }),
        });

        if (response.ok) {
            alert("Signup successful!");
            navigate("/login"); // Use navigate instead of history.push
        } else {
            alert("Signup failed");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Phone</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
          Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
