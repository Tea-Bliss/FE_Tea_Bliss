import { useMutation, useQuery } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import {
  getCustomers,
  getOneCustomer,
  putCustomerProfile,
} from '@/components/page-layout/adminLayout/apis/customersApis';

export const useGetCustomers = (query: { email?: string; nickname?: string; page: number; limit: number }) => {
  return useQuery({
    queryKey: ['admin', 'customers', query],
    queryFn: () => getCustomers(query),
  });
};

export const useGetOneCustomer = (id: number) => {
  return useQuery({
    queryKey: ['admin', 'customers', id],
    queryFn: () => getOneCustomer(id),
  });
};

type ProfileMutationVariables = {
  data: {
    nickname: string;
    profile: string;
    role: '관리자' | '일반 회원';
  };
  id: number;
};

export const useAdminPutProfile = () => {
  return useMutation({
    mutationFn: async ({ data, id }: ProfileMutationVariables) => await putCustomerProfile(data, id),
    onError: () => {
      openToast('error', '프로필 변경에 실패했습니다');
    },
    onSuccess: () => {
      openToast('success', '프로필이 변경되었습니다');
    },
  });
};
