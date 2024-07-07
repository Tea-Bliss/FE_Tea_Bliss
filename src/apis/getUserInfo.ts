import { axiosInstance } from '@/apis/axiosInstance';
import { UserInfo } from '@/types/users/type';

export const getUserInfo = async () => {
  return await axiosInstance.get<UserInfo>('/member/info');
};
