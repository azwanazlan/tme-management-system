import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Resident } from '@/model/interface';

const TablePage: React.FC = () => {
  const [residents, setResidents] = useState<Resident[]>([]);

  useEffect(() => {
    fetch('/api/residents')
      .then((response) => response.json())
      .then((data) => setResidents(data.data))
      .catch((error) => console.error('Error fetching residents:', error));
  }, []);

  const handleView = (id: string) => {
    console.log('View resident with id:', id);
  };

  const handleEdit = (id: string) => {
    console.log('Edit resident with id:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete resident with id:', id);
  };

  return (
    <Layout>
      <h1 style={{ color: '#2a72d7', fontSize: '2rem', marginBottom: '20px' }}>Residents</h1>
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
              <th style={{ padding: '15px', borderBottom: '2px solid #e2e8f0' }}>ID</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #e2e8f0' }}>Name</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #e2e8f0' }}>House No</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #e2e8f0' }}>Phone No</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #e2e8f0' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident) => (
              <tr
                key={resident.id}
                style={{
                  backgroundColor: '#ffffff',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
              >
                <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{resident.id}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{resident.name}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{resident.houseNo}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>{resident.phoneNo}</td>
                <td style={{ padding: '15px', borderBottom: '1px solid #e2e8f0' }}>
                  <button
                    onClick={() => handleView(resident.id)}
                    style={{
                      marginRight: '10px',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      border: '1px solid #2a72d7',
                      backgroundColor: '#ffffff',
                      color: '#2a72d7',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease, color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2a72d7';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#2a72d7';
                    }}
                  >
                                    View
                  </button>
                  <button
                    onClick={() => handleEdit(resident.id)}
                    style={{
                      marginRight: '10px',
                      padding: '8px 12px',
                      borderRadius: '5px',
                      border: '1px solid #38a169',
                      backgroundColor: '#ffffff',
                      color: '#38a169',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease, color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#38a169';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#38a169';
                    }}
                  >
                                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(resident.id)}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '5px',
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
                                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default TablePage;
