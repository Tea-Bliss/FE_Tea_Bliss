import { useMutation, useQuery } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import {
  deleteTea,
  getAllTeas,
  getOneTea,
  getTeasSeasonFilter,
  patchTea,
  postTea,
} from '@/components/page-layout/adminLayout/apis/finishedTeasApis';
import { PatchFinishedTeasType, PostFinishedTeasType } from '@/components/page-layout/adminLayout/types/productType';

export const useGetAllTeas = (query: { page: number; limit: number; season?: string | null }) => {
  return useQuery({
    queryKey: ['admin', 'finished-teas', query.page],
    queryFn: () => getAllTeas({ page: query.page, limit: query.limit }),
  });
};

export const useGetTeasSeasonFilter = (query: { season: string; page: number; limit: number }) => {
  return useQuery({
    queryKey: ['admin', 'finished-teas', query.season, query.page],
    queryFn: () => getTeasSeasonFilter(query),
  });
};

export const useGetOneTea = (id: number) => {
  return useQuery({
    queryKey: ['admin', 'finished-teas', id],
    queryFn: () => getOneTea(id),
  });
};

export const useAdminPostTea = () => {
  return useMutation({
    mutationFn: async (data: PostFinishedTeasType) => await postTea(data),
    onError: () => {
      openToast('error', '완성차 등록에 실패했습니다.');
    },
    onSuccess: () => {
      openToast('success', '완성차 등록에 성공했습니다.');
    },
  });
};

type PatchMutationVariables = {
  data: PatchFinishedTeasType;
  id: number;
};

export const useAdminPatchTea = () => {
  return useMutation({
    mutationFn: async ({ data, id }: PatchMutationVariables) => await patchTea(data, id),
    onError: () => {
      openToast('error', '완성차 수정에 실패했습니다.');
    },
    onSuccess: () => {
      openToast('success', '완성차 수정에 성공했습니다.');
    },
  });
};

export const useAdminDeleteTea = () => {
  return useMutation({
    mutationFn: async (id: number) => await deleteTea(id),
    onError: () => {
      openToast('error', '완성차 삭제에 실패했습니다');
    },
    onSuccess: () => {
      openToast('success', '완성차 삭제에 성공했습니다');
    },
  });
};
