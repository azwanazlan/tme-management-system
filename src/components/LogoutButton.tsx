import React from 'react';
import { useRouter } from 'next/router';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    // Clear the authentication token
    document.cookie = 'token=; Max-Age=0; Path=/; Secure; SameSite=None;';
    // Redirect to the login page
    await router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #e53e3e',
        backgroundColor: '#ffffff',
        color: '#e53e3e',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#e53e3e';
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.color = '#e53e3e';
      }}
    >
            Logout
    </button>
  );
};

export default LogoutButton;