import React, { useState } from 'react';
import { useRouter } from 'next/router';

const MainPage: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNavigation = (path: string) => {
    if (path === '/pay-bill') {
      setShowModal(true);
    } else {
      router.push(path);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormSubmitted(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>What do you want to do?</h1>
      <ul style={styles.menuList}>
        <li
          style={styles.menuItem}
          onClick={() => handleNavigation('/login')}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c8e6c9')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e0f0ff')}
        >
            Login as Admin
        </li>
        <li
          style={styles.menuItem}
          onClick={() => handleNavigation('/pay-bill')}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c8e6c9')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#e0f0ff')}
        >
            Pay Monthly Bill
        </li>
      </ul>
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <button onClick={closeModal} style={styles.closeButton}>&times;</button>
            {!formSubmitted ? (
              <div>
                <h2 style={styles.formTitle}>Pay Monthly Bill</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                  <input type="text" placeholder="House No" style={styles.input} required />
                  <input type="email" placeholder="Email" style={styles.input} required />
                  <button type="submit" style={styles.submitButton}>Submit</button>
                </form>
              </div>
            ) : (
              <div>
                <h2 style={styles.formTitle}>Payment Link</h2>
                <p>Your payment link is ready. Click the link below to proceed with the payment.</p>
                <a href="https://payment.example.com" style={styles.paymentLink}>Proceed to Payment</a>
                <button onClick={closeModal} style={styles.closeButton}>&times;</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    color: '#333333',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: '#e0f0ff',
    color: '#333333',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    marginBottom: '10px',
    textAlign: 'center' as const,
    width: '200px',
    border: '1px solid #000000', // Added black border
  },
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '400px',
    textAlign: 'center' as const,
    position: 'relative' as const,
  },
  closeButton: {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  },
  formTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#333333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#f8f8f8',
    color: '#333',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  submitButton: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#58a6ff',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  paymentLink: {
    display: 'block',
    marginTop: '20px',
    color: '#58a6ff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold' as const,
  },
};

export default MainPage;