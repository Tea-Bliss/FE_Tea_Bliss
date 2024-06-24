import { axiosInstance } from '@/apis/axiosInstance';

export const getLooseLeafTeas = () => {
  return axiosInstance.get(`ingredient?page=1&limit=200`);
};
