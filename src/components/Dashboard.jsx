import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ drones }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Drone Fleet Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drones.map((drone) => (
          <Link key={drone.id} to={`/drone/${drone.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-2">{drone.id}</h2>
              <p className="text-gray-600">Status: {drone.status}</p>
              <p className="text-gray-600">Battery: {drone.battery_status}</p>
              <p className="text-gray-600">Flight Hours: {drone.flight_hours}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;