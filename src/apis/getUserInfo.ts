import { UserInfo } from '@/types/users/type';

import axiosInstance from './axiosInstance';

export const getUserInfo = async () => {
  return await axiosInstance.get<UserInfo>('/member/info');
};
