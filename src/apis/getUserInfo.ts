import { UserInfo } from '@/types/users/type';

import axiosInstance from './axiosInstance';

export const getUserInfo = async () => {
  const { data } = await axiosInstance.get<UserInfo>('/member/info');
  return data.data;
};
