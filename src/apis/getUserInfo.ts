import { UserInfo } from '@/types/users/type';

import { axiosInstance } from '@/apis/axiosInstance';

export const getUserInfo = async () => {
  return await axiosInstance.get<UserInfo>('/member/info');
};
