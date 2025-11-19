import api from '../../core/api';

export const funcSerachDrillholes = async (partnum, revision, layer) => {
  try {
    const response = await api.get(`/api/yellowsheets/search/${partnum}/${revision}/${layer}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const funcGetDetailDrillhole = async (partnum, revision, layer, type, version) => {
  try {
    const response = await api.get(`/api/yellowsheets/search/detail/${partnum}/${revision}/${layer}/${type}/${version}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};