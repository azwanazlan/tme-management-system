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
      <div style={styles.overlay}>
        <img src="/logo.png" alt="Logo" style={styles.logo}/>
        {/*<h1 style={styles.title}>Laman Web Rasmi</h1>*/}
        <ul style={styles.menuList}>
          <li
            style={styles.menuItem}
            onClick={() => handleNavigation('/login')}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e3f2fd')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          >
            Log Masuk Admin
          </li>
          <li
            style={styles.menuItem}
            onClick={() => handleNavigation('/pay-bill')}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e3f2fd')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          >
            Bayaran Bulanan RELA
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
                    <input type="text" placeholder="House No" style={styles.input} required/>
                    <input type="email" placeholder="Email" style={styles.input} required/>
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
    </div>
  );
};

const styles = {
  container: {
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
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Slight transparency with the background color
    padding: '20px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center' as const,
    display: 'inline-block',
  },
  logo: {
    width: '200px', // Adjust the width as needed
    height: 'auto',
    marginTop: '20px', // Space between logo and title
    marginBottom: '20px', // Space between logo and menu container
  },
  // title: {
  //   fontSize: '2.5rem',
  //   fontWeight: '600',
  //   marginBottom: '20px',
  //   color: '#5db742',
  //   fontFamily: 'Arial'
  // },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  menuItem: {
    padding: '14px 20px',
    borderRadius: '12px',
    backgroundColor: '#f5f5f5',
    color: '#424242',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    marginBottom: '12px',
    textAlign: 'center' as const,
    width: '220px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginLeft: 'auto', // Centers the item horizontally
    marginRight: 'auto', // Centers the item horizontally
  },
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
    width: '420px',
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
    fontSize: '1.8rem',
    marginBottom: '16px',
    color: '#1e88e5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '14px',
    marginBottom: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    backgroundColor: '#fdfdfd',
    color: '#333',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box' as const,
  },
  submitButton: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1e88e5',
    color: '#ffffff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  paymentLink: {
    display: 'block',
    marginTop: '20px',
    color: '#1e88e5',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
  },
};

export default MainPage;
