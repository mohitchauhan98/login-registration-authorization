import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/Slice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="border border-gray-300 p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        {user ? (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button 
          onClick={handleLogout} 
          className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
