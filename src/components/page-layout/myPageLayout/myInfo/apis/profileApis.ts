import axiosInstance from '@/apis/axiosInstance';

export const getUsers = () => {
  return axiosInstance.get(`member/info`);
};

export const patchPassword = (data: { oldPassword: string; newPassword: string; newPasswordCheck: string }) => {
  return axiosInstance.patch('member/password', data);
};

export const patchProfile = (data: { nickname: string; profile: string }) => {
  return axiosInstance.patch('member/password', data);
};

export const patchAddress = (data: { address: string }) => {
  return axiosInstance.patch('member/password', data);
};
