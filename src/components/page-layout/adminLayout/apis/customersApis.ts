import axiosInstance from '@/apis/axiosInstance';
import createQueryString from '@/components/page-layout/adminLayout/utils/createQueryString';

export const getCustomers = (query: { email?: string; nickname?: string; page?: number; limit?: number }) => {
  return axiosInstance.get(`member/info?${createQueryString(query)}`);
};
