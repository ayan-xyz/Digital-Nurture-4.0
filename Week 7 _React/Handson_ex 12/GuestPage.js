import React from 'react';
import FlightList from './FlightList';

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>You must log in to book flights.</p>
      <FlightList />
    </div>
  );
};

export default GuestPage;
