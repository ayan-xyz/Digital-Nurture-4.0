import React from 'react';

const flights = [
  { id: 1, airline: 'IndiGo', from: 'Delhi', to: 'Mumbai', time: '10:00 AM' },
  { id: 2, airline: 'Air India', from: 'Kolkata', to: 'Chennai', time: '1:30 PM' },
  { id: 3, airline: 'SpiceJet', from: 'Bangalore', to: 'Hyderabad', time: '6:45 PM' },
];

const FlightList = ({ showBookButton = false }) => {
  return (
    <div className="flight-list">
      <h2>Available Flights</h2>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            {showBookButton && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              {showBookButton && (
                <td>
                  <button onClick={() => alert(`Booked flight ${flight.id}`)}>Book</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
