import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import LoginPage from './components/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPage(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleShowLogin = () => {
    setShowLoginPage(true);
  };

  return (
    <div className="app">
      <header>
        <h1>Ticket Booking App</h1>
        {!isLoggedIn ? (
          <button onClick={handleShowLogin}>Login</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </header>

      <main>
        {!isLoggedIn ? (
          showLoginPage ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
            <GuestPage />
          )
        ) : (
          <UserPage />
        )}
      </main>
    </div>
  );
}

export default App;
