import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#2f353b', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <nav
        style={{
          width: '250px',
          backgroundColor: '#1e242b', // Darker sidebar
          padding: '20px',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          color: '#ffffff',
        }}
      >
        <h2
          style={{
            fontSize: '1.6rem',
            marginBottom: '40px',
            fontWeight: 700,
            color: '#58a6ff', // Portainer-inspired blue
          }}
        >
                    MyApp
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <a
              href="/dashboard"
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'block',
                transition: 'background-color 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            >
                            Dashboard
            </a>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <a
              href="/table"
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'block',
                transition: 'background-color 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            >
                            Table
            </a>
          </li>
        </ul>
      </nav>
      <main
        style={{
          flex: 1,
          padding: '20px',
          backgroundColor: '#fff',
          color: '#333', // Dark gray text for readability
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',
          overflowY: 'auto',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
