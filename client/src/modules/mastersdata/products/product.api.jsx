import api from '../../../core/api';

const API = '/api/master/product';

export const getProducts = async () => {
  try {
    const res = await api.get(API);
    return res.data;
  } catch (err) {
    console.error('Fetch Product Error:', err);
    throw err;
  }
};

export const createProduct = async (data) => {
  return (await api.post(API, data)).data;
};

export const updateProduct = async (id, data) => {
  return (await api.put(`${API}/${id}`, data)).data;
};

export const deleteProduct = async (id) => {
  return (await api.delete(`${API}/${id}`)).data;
};
