import axiosInstance from '@/apis/axiosInstance';

export const getLooseLeafTeas = () => {
  return axiosInstance.get(`ingredient`);
};
