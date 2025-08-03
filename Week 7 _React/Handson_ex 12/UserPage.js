import React from 'react';
import FlightList from './FlightList';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome User</h2>
      <p>You can now book tickets.</p>
      <FlightList showBookButton={true} />
    </div>
  );
};

export default UserPage;
