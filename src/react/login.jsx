/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'pandavmohit' && password === '123456789') {
      setIsLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    alert('Logged out successfully!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      {!isLoggedIn ? (
        <div style={{ display: 'inline-block', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ color: '#333' }}>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
          />
          <button onClick={handleLogin} style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#4CAF50', color: 'white', fontSize: '16px', cursor: 'pointer' }}>Login</button>
        </div>
      ) : (
        <div style={{ display: 'inline-block', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ color: '#333' }}>Welcome, {username}!</h2>
          <button onClick={handleLogout} style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#4CAF50', color: 'white', fontSize: '16px', cursor: 'pointer' }}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
