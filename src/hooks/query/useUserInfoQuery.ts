import { useQuery } from '@tanstack/react-query';

import { getUserInfo } from '@/apis/getUserInfo';

export const useUserInfoQuery = () => {
  const isBrowser = typeof window !== 'undefined';
  const token = isBrowser ? localStorage.getItem('token') : null;

  return useQuery({ queryKey: ['my-info', 'user'], queryFn: getUserInfo, enabled: !!token });
};
