import React from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Fans CRM</h1>
      <div className="card p-8 bg-white shadow-lg rounded-lg text-center">
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Login
        </button>
        <p className="mt-4 text-gray-600">React.js + Nest.js + MySQL</p>
      </div>
    </main>
  );
};

export default App;
