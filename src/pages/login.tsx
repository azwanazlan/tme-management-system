import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        await router.push('/dashboard');
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid credentials, please try again.');
      }
    } catch (error) {
      setError('An error occurred while trying to log in. Please try again later.');
      console.error('Login error:', error);
    }
  };

  const handleBackToMain = () => {
    router.push('/main');
  };

  return (
    <div style={{
      display: 'flex', // what is meant by flex?
      flexDirection: 'column' as const,
      alignItems: 'center', //
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url("/taman-mawar-ehsan.png")', // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(249, 251, 253, 0.85)', // Slight transparency with the background color
      color: '#333333',
      fontFamily: 'Inter, Arial, sans-serif',
    }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '12px',
          width: '400px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          color: '#333333',
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
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#f8f8f8',
                color: '#333',
                fontSize: '1rem',
                outline: 'none',
                boxSizing: 'border-box',
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
                boxSizing: 'border-box',
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
              backgroundColor: '#58a6ff',
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
        {error && (
          <div
            style={{
              marginTop: '20px',
              color: '#d32f2f',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {error}
          </div>
        )}
        <button
          onClick={handleBackToMain}
          style={{
            marginTop: '20px',
            width: '100%',
            padding: '14px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#e0e0e0',
            color: '#333',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d5d5d5')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
        >
                    Back to Main Page
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
