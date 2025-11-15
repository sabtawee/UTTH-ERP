import axios from '../api';

export const loginApi = async (email, password) => {
  console.log('Logging in with:', { email, password });
  const res = await axios.post('/api/auth/login', { email, password });
  return res.data;
};

export const loginADApi = async (username, password) => {
  const res = await axios.post('/api/auth/loginAD', { username, password });
  return res.data;
};

export const getMe = async () => {
  const res = await axios.get('/api/auth/me');
  return res.data;
};

