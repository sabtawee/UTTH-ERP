import axios from '../api';

export const getPermissions = async () => {
  const res = await axios.get('/api/permission');
  return res.data;
};

export const createPermission = async ({ name, module }) => {
  const res = await axios.post('/api/permission', { name, module });
  return res.data;
};
