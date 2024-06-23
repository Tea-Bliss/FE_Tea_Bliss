import { useMutation, useQuery } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import {
  deleteIngredient,
  getIngredients,
  getOneIngredient,
  postIngredient,
  putIngredient,
} from '@/components/page-layout/adminLayout/apis/looseLeafTeasApis';
import { PostOrPutLooseLeafTeaType } from '@/components/page-layout/adminLayout/types/productType';

export const useGetIngredients = (query: { category?: string | null; page: number; limit: number }) => {
  return useQuery({
    queryKey: ['admin', 'loose-leaf-teas', query],
    queryFn: () => getIngredients(query),
  });
};

export const useGetOneIngredient = (id: number) => {
  return useQuery({
    queryKey: ['admin', 'loose-leaf-teas', id],
    queryFn: () => getOneIngredient(id),
  });
};

export const useAdminPostIngredient = () => {
  return useMutation({
    mutationFn: async (data: PostOrPutLooseLeafTeaType) => await postIngredient(data),
    onError: () => {
      openToast('error', '개별 티 등록에 실패했습니다.');
    },
    onSuccess: () => {
      openToast('success', '개별 티 등록에 성공했습니다.');
    },
  });
};

export const useAdminPutIngredient = () => {
  return useMutation({
    mutationFn: async (data: PostOrPutLooseLeafTeaType) => await putIngredient(data),
    onError: () => {
      openToast('error', '개별 티 수정에 실패했습니다.');
    },
    onSuccess: () => {
      openToast('success', '개별 티 수정에 성공했습니다.');
    },
  });
};

export const useAdminDeleteIngredient = () => {
  return useMutation({
    mutationFn: async (id: number) => await deleteIngredient(id),
    onError: () => {
      openToast('error', '개별 티 삭제에 실패했습니다');
    },
    onSuccess: () => {
      openToast('success', '개별 티 삭제에 성공했습니다');
    },
  });
};
