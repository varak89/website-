// src/components/VisitorHistory.js

import React, { useState } from 'react';

const VisitorHistory = () => {
  // Step 2: Define the visitorLogs state
  const [visitorLogs, setVisitorLogs] = useState([]);

  // Step 3: Define states for form fields (name, check-in, check-out)
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields (optional)
    if (!name || !checkIn || !checkOut) {
      alert("Please fill out all fields.");
      return;
    }

    // Add the new visitor data to the visitorLogs state
    const newVisitor = {
      name,
      checkIn,
      checkOut
    };

    setVisitorLogs([...visitorLogs, newVisitor]);

    // Clear form fields after submitting
    setName('');
    setCheckIn('');
    setCheckOut('');
  };

  return (
    <div>
      <h2>Visitor History</h2>

      {/* Step 3: Form to Add Visitor */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter visitor name"
          />
        </div>
        <div>
          <label>Check-In:</label>
          <input
            type="text"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Enter check-in time"
          />
        </div>
        <div>
          <label>Check-Out:</label>
          <input
            type="text"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Enter check-out time"
          />
        </div>
        <button type="submit">Add Visitor</button>
      </form>

      {/* Display Visitor Logs */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Check-In</th>
            <th>Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {visitorLogs.length === 0 ? (
            <tr>
              <td colSpan="3">No visitors yet</td>
            </tr>
          ) : (
            visitorLogs.map((log, index) => (
              <tr key={index}>
                <td>{log.name}</td>
                <td>{log.checkIn}</td>
                <td>{log.checkOut}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorHistory;
