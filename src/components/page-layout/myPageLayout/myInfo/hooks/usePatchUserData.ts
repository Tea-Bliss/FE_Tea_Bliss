import { useMutation, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import {
  patchAddress,
  patchPassword,
  patchProfile,
} from '@/components/page-layout/myPageLayout/myInfo/apis/profileApis';

export const usePatchProfile = () => {
  return useMutation({
    mutationFn: async (data: { nickname: string; profile?: string | null }) => await patchProfile(data),
  });
};

export const usePatchPassword = () => {
  return useMutation({
    mutationFn: async (data: { oldPassword: string; newPassword: string; newPasswordCheck: string }) =>
      await patchPassword(data),
    onError: (error) => {
      openToast('error', error.message);
    },
    onSuccess: () => {
      openToast('success', '비밀번호가 변경되었습니다');
    },
  });
};

export const usePatchAddress = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { address: string }) => await patchAddress(data),
    onError: (error) => {
      openToast('error', '주소 변경에 실패하였습니다');
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['my-info', 'user'] });
      openToast('success', '주소가 변경되었습니다');
    },
  });
};
