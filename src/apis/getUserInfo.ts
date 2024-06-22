import axiosInstance from './axiosInstance';

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get('/member/info');
  return data.data;
};
