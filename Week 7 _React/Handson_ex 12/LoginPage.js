import React from 'react';

const LoginPage = ({ onLogin }) => {
  const handleLoginClick = () => {
    // Simulate login logic here
    onLogin(); // call login handler passed as prop
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Please click the button below to login.</p>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LoginPage;
