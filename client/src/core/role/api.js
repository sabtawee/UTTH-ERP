import axios from '../api';

export const getRoles = async () => {
  const res = await axios.get('/api/role');
  return res.data;
};

export const getPermissions = async () => {
  const res = await axios.get('/api/permission');
  return res.data;
};

export const createRole = async (name, description) => {
  const res = await axios.post('/api/role', { name, description });
  return res.data;
};

export const assignPermissionsToRole = async (roleId, permissionIds) => {
  const res = await axios.post(`/api/role/${roleId}/assign-permission`, {
    permissionIds,
  });
  return res.data;
};
