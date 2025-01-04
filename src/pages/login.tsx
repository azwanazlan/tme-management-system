import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <div
        style={{
          backgroundColor: '#ffffff', // Light background for the form
          padding: '40px',
          borderRadius: '12px',
          width: '400px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          color: '#333333', // Dark text for better readability
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            color: '#58a6ff',
            marginBottom: '20px',
            fontSize: '2rem',
            fontWeight: 700,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          }}
        >
                    MyApp
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#f8f8f8',
                color: '#333',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box', // Ensures padding doesn't affect the width
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#f8f8f8',
                color: '#333',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box', // Ensures padding doesn't affect the width
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#58a6ff', // Blue accent for the button
              color: '#ffffff',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4a90e2')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#58a6ff')}
          >
                        Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
