import api from '../api';

export const getUsers = async () => {
  const res = await api.get('/api/user');
  return res.data;
};

export const getRoles = async () => {
  const res = await api.get('/api/role');
  return res.data;
};

export const assignRolesToUser = async (userId, roleIds) => {
  const res = await api.post(`/api/user/${userId}/assign-role`, {
    roleIds,
  });
  return res.data;
};

export const createUser = async (userData) => {
  const res = await api.post('/api/user', userData);
  return res.data;
};