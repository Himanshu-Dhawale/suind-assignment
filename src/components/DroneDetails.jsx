import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DroneDetails = ({ drones }) => {
  const { id } = useParams();
  const drone = drones.find((d) => d.id === id);

  if (!drone) {
    return <div>Drone not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/dashboard" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-3xl font-bold mb-6">{drone.id} Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-2"><strong>Status:</strong> {drone.status}</p>
        <p className="mb-2"><strong>Flight Hours:</strong> {drone.flight_hours}</p>
        <p className="mb-2"><strong>Battery Status:</strong> {drone.battery_status}</p>
        <p className="mb-2"><strong>Last Known Location:</strong> {drone.last_known_location.join(', ')}</p>
        <p className="mb-2"><strong>Current Mission:</strong> {drone.current_mission}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Maintenance Logs</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {drone.maintenance_logs.map((log, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.technician}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DroneDetails;