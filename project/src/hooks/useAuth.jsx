import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('/auth/login', { username:email, password });

      if (response.status==200) {
        const { token, payload } = response.data;

        setToken(token);
        setUser(payload);

        // Store token and user in localStorage
        localStorage.setItem('user', JSON.stringify(payload));
        localStorage.setItem('token', token);
      } else {
        throw new Error('Login failed: Invalid response from server');
      }
    } catch (error) {
      throw new Error('Invalid credentials or server error');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
