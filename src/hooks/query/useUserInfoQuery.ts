import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '@/apis/getUserInfo';

export const useUserInfoQuery = () => {
  return useQuery({ queryKey: ['userInfo'], queryFn: getUserInfo });
};
