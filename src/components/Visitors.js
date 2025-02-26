
import React, { useState } from 'react';

const CheckInOut = () => {
  // State to store check-in and check-out times
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  // State to store visitor details
  const [visitorDetails, setVisitorDetails] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    personToMeet: '',
    flatNumber: '',
    reasonForMeeting: ''
  });

  // Handle input change for visitor details
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVisitorDetails({
      ...visitorDetails,
      [name]: value
    });
  };

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

      {/* Visitor Details Form */}
      <div>
        <h3>Visitor Details</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={visitorDetails.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={visitorDetails.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={visitorDetails.phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="personToMeet"
            placeholder="Who to Meet"
            value={visitorDetails.personToMeet}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="flatNumber"
            placeholder="Flat Number"
            value={visitorDetails.flatNumber}
            onChange={handleInputChange}
          />
          <textarea
            name="reasonForMeeting"
            placeholder="Reason for Meeting"
            value={visitorDetails.reasonForMeeting}
            onChange={handleInputChange}
          />
        </form>
      </div>

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

      {/* Display visitor details after check-in */}
      {checkInTime && (
        <div>
          <h3>Visitor Information</h3>
          <p>Name: {visitorDetails.name}</p>
          <p>Address: {visitorDetails.address}</p>
          <p>Phone Number: {visitorDetails.phoneNumber}</p>
          <p>Who to Meet: {visitorDetails.personToMeet}</p>
          <p>Flat Number: {visitorDetails.flatNumber}</p>
          <p>Reason for Meeting: {visitorDetails.reasonForMeeting}</p>
        </div>
      )}
    </div>
  );
};

export default CheckInOut;
