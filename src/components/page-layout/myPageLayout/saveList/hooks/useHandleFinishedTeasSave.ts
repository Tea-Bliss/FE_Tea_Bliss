import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import {
  deleteFinishedTeasSave,
  getFinishedTeasSave,
  postFinishedTeasSave,
} from '@/components/page-layout/myPageLayout/saveList/apis/finishedTeasSaveApis';

export const useGetFinishedTeasSave = ({
  nickname,
  productId = '',
  limit = 8,
}: {
  nickname: '진찬용' | '코드잇';
  productId?: number | string;
  limit?: number;
}) => {
  return useInfiniteQuery({
    queryKey: ['save-list'],

    queryFn: ({ pageParam }: { pageParam: number }) => {
      return getFinishedTeasSave({ nickname, productId: pageParam, limit });
    },

    initialPageParam: productId,

    getNextPageParam: (lastPage: any, allPage: any) => {
      if (lastPage.next) {
        return lastPage.next.productId;
      }

      if (lastPage?.data.next === null) {
        return undefined;
      }

      return undefined;
    },
  });
};

export const usePostFinishedTeasSave = () => {
  return useMutation({
    mutationFn: async ({ nickname, productId }: { nickname: '진찬용' | '코드잇'; productId: number }) =>
      await postFinishedTeasSave({ nickname, productId }),
  });
};

export const useDeleteBlendingTeasSave = () => {
  return useMutation({
    mutationFn: async ({ nickname, productId }: { nickname: '진찬용' | '코드잇'; productId: number }) =>
      await deleteFinishedTeasSave({ nickname, productId }),
  });
};
