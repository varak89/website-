import React, { useState } from 'react';

const CheckInOut = () => {
  // State to store check-in and check-out times
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  // Function to handle check-in
  const handleCheckIn = () => {
    const currentTime = new Date().toLocaleString();
    setCheckInTime(currentTime);
  };

  // Function to handle check-out
  const handleCheckOut = () => {
    const currentTime = new Date().toLocaleString();
    setCheckOutTime(currentTime);
  };

  return (
    <div>
      <h2>Visitor Check-In and Check-Out</h2>
      
      {/* Check-In Section */}
      <div>
        <h3>Check-In</h3>
        <button onClick={handleCheckIn}>Check-In</button>
        {checkInTime && <p>Checked In at: {checkInTime}</p>}
      </div>

      {/* Check-Out Section */}
      <div>
        <h3>Check-Out</h3>
        <button onClick={handleCheckOut}>Check-Out</button>
        {checkOutTime && <p>Checked Out at: {checkOutTime}</p>}
      </div>
    </div>
  );
};

export default CheckInOut;
