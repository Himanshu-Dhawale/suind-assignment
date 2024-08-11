// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

  
  
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import DroneDetails from './components/DroneDetails';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Extended data with more drones
  const data = {
    users: [
      {username: "admin", password: "password123"}
    ],
    drones: [
      {
        id: "Drone1",
        status: "Available",
        flight_hours: 120,
        battery_status: "80%",
        last_known_location: [40.712776, -74.005974],
        current_mission: "Survey field A",
        maintenance_logs: [
          {date: "2024-01-10", description: "Battery replacement", technician: "John Doe"},
          {date: "2024-02-15", description: "Rotor inspection", technician: "Jane Smith"}
        ]
      },
      {
        id: "Drone2",
        status: "In-flight",
        flight_hours: 200,
        battery_status: "50%",
        last_known_location: [34.052235, -118.243683],
        current_mission: "Inspect irrigation system",
        maintenance_logs: [
          {date: "2024-03-05", description: "Firmware update", technician: "Alice Johnson"},
          {date: "2024-04-22", description: "Motor calibration", technician: "Bob Lee"}
        ]
      },
      {
        id: "Drone3",
        status: "Maintenance",
        flight_hours: 95,
        battery_status: "60%",
        last_known_location: [41.878113, -87.629799],
        current_mission: "N/A",
        maintenance_logs: [
          {date: "2024-05-12", description: "Propeller replacement", technician: "Charlie Brown"},
          {date: "2024-06-30", description: "GPS module repair", "technician": "Diana Prince"}
        ]
      },
      {
        id: "Drone4",
        status: "Available",
        flight_hours: 150,
        battery_status: "90%",
        last_known_location: [37.774929, -122.419416],
        current_mission: "Monitor air quality",
        maintenance_logs: [
          {date: "2024-07-05", description: "Sensor calibration", technician: "Eva Green"},
          {date: "2024-08-10", description: "Software update", technician: "Frank White"}
        ]
      },
      {
        id: "Drone5",
        status: "In-flight",
        flight_hours: 180,
        battery_status: "30%",
        last_known_location: [51.507351, -0.127758],
        current_mission: "Traffic monitoring",
        maintenance_logs: [
          {date: "2024-09-15", description: "Camera upgrade", technician: "George Brown"},
          {date: "2024-10-20", description: "Battery optimization", technician: "Hannah Black"}
        ]
      },
      {
        id: "Drone6",
        status: "Charging",
        flight_hours: 220,
        battery_status: "10%",
        last_known_location: [48.856614, 2.352222],
        current_mission: "N/A",
        maintenance_logs: [
          {date: "2024-11-25", description: "Motor replacement", technician: "Isaac Newton"},
          {date: "2024-12-30", description: "Full system check", technician: "Julia Child"}
        ]
      },
      {
        id: "Drone7",
        status: "Available",
        flight_hours: 80,
        battery_status: "100%",
        last_known_location: [35.689487, 139.691706],
        current_mission: "Ready for deployment",
        maintenance_logs: [
          {date: "2025-01-05", description: "Initial setup", technician: "Karl Marx"},
          {date: "2025-02-10", description: "Test flight", technician: "Luna Lovegood"}
        ]
      }
    ]
  };

  const handleLogin = (username, password) => {
    const user = data.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard drones={data.drones} /> : <Navigate to="/" />} />
          <Route path="/drone/:id" element={isAuthenticated ? <DroneDetails drones={data.drones} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;