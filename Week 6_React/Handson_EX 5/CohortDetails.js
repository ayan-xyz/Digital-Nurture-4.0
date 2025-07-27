// CohortDetails.js
import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ name, duration, status }) => {
  const headingStyle = {
    color: status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={headingStyle}>Cohort Details</h3>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>

        <dt>Duration:</dt>
        <dd>{duration}</dd>

        <dt>Status:</dt>
        <dd>{status}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
