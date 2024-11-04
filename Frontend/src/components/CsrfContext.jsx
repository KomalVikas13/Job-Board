import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const CsrfContext = createContext();

export const useCsrf = () => useContext(CsrfContext);

export const CsrfProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState('');

  const fetchCsrfToken = async () => {
    try {
      const response = await axios.get('http://localhost:8096/api/csrf-token', { withCredentials: true });
      const token = response.data.token || response.headers['x-csrf-token']; // Use the correct header
      setCsrfToken(token);
      console.log(response);
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
    }
  };

  useEffect(() => {
    fetchCsrfToken();
  }, []);

  return (
    <CsrfContext.Provider value={{ csrfToken, fetchCsrfToken }}>
      {children}
    </CsrfContext.Provider>
  );
};
