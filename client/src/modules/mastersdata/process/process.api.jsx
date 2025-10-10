import api from '../../../core/api';

const API = '/api/master/process';

export const getProcesses = async () => {
  try {
    const res = await api.get(API);
    return res.data;
  } catch (error) {
    console.error('Error fetching processes:', error);
    throw error;
  }
};

export const createProcess = async (data) => {
  try {
    const res = await api.post(API, data);
    return res.data;
  } catch (error) {
    console.error('Error creating process:', error);
    throw error;
  }
};

export const updateProcess = async (id, data) => {
  try {
    const res = await api.put(`${API}/${id}`, data);
    return res.data;
  } catch (error) {
    console.error('Error updating process:', error);
    throw error;
  }
};

export const deleteProcess = async (id) => {
  try {
    const res = await api.delete(`${API}/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error deleting process:', error);
    throw error;
  }
};
