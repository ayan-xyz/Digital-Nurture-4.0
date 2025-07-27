// App.js
import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="Web Development" duration="12 Weeks" status="ongoing" />
      <CohortDetails name="Data Science" duration="10 Weeks" status="upcoming" />
    </div>
  );
}

export default App;
