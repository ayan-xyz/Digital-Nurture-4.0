import React from 'react';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BolgDetails from './BolgDetails';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around', padding: '50px' }}>
      <div><CourseDetails /></div>
      <div style={{ borderLeft: '4px solid green', paddingLeft: '20px' }}><BookDetails /></div>
      <div style={{ borderLeft: '4px solid green', paddingLeft: '20px' }}><BolgDetails /></div>
    </div>
  );
}

export default App;
