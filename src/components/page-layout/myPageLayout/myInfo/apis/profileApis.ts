import axiosInstance from '@/apis/axiosInstance';

export const getMyInfo = () => {
  return axiosInstance.get(`member/info`);
};

export const patchPassword = (data: { oldPassword: string; newPassword: string; newPasswordCheck: string }) => {
  return axiosInstance.patch('member/password', data);
};

export const patchProfile = (data: { nickname?: string; profile?: string | null; role: '관리자' | '일반 회원' }) => {
  return axiosInstance.patch('member/edit', data);
};

export const patchAddress = (data: { address: string }) => {
  return axiosInstance.patch('member/address', data);
};
