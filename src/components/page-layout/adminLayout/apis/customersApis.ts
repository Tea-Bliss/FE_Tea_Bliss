import axiosInstance from '@/apis/axiosInstance';
import createQueryString from '@/components/page-layout/adminLayout/utils/createQueryString';

export const getCustomers = (query: { email?: string; nickname?: string; page?: number; limit?: number }) => {
  return axiosInstance.get(`admin/member-list?${createQueryString(query)}`);
};

export const getOneCustomer = (id: number) => {
  return axiosInstance.get(`admin/${id}`);
};

export const putCustomerProfile = (
  data: { nickname: string; profile: string; role: '관리자' | '일반 회원' },
  id: number
) => {
  return axiosInstance.put(`admin/edit/${id}`, data);
};
