import { createContext, useContext, useState, useEffect } from 'react';
import { Spin } from 'antd';
import { loginApi, getMe } from '../auth/useLogin';

const AuthContext = createContext();

// Loading Component สวยๆ
const AuthLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <div className="text-center auth-loading-container">
      <div className="mb-8">
       
        <h2 className="text-2xl font-bold text-gray-800 mb-2">UTTH MES</h2>
        <p className="text-gray-600">Manufacturing Execution System</p>
      </div>
      
      <div className="relative">
        <Spin 
          size="large" 
          className="custom-spin"
        />
        <div className="mt-4">
          <p className="text-gray-500 text-sm animate-pulse">
            กำลังโหลดระบบ...
          </p>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center space-x-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
      
      <div className="mt-6 text-xs text-gray-400">
        Version 1.0.0 | Powered by UTTH
      </div>
    </div>
  </div>
);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await loginApi(email, password);
      console.log('Login response:', res);
      localStorage.setItem('token', res.token);
      setUser(res.user);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    localStorage.removeItem('token');
    setUser(null);
    setIsLoading(false);
  };

  const fetchMe = async () => {
    setIsLoading(true);
    try {
      const user = await getMe();
      setUser(user);
    } catch (error) {
      console.error('Fetch me error:', error);
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      if (localStorage.getItem('token')) {
        await fetchMe();
      } else {
        setIsLoading(false);
      }
    };
    
    initAuth();
  }, []);

  // แสดง Loading Screen ขณะที่กำลังตรวจสอบ authentication
  if (isLoading) {
    return <AuthLoading />;
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
