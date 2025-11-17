import api from '../../core/api';

export const funcSerachDrillholes = async (partnum, revision, layer) => {
  try {
    const response = await api.get(`/api/yellowsheets/search/${partnum}/${revision}/${layer}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};