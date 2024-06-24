import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import {
  deleteFinishedTeasSave,
  getFinishedTeasSave,
  postFinishedTeasSave,
} from '@/components/page-layout/myPageLayout/saveList/apis/blendingTeasSaveApis';

export const useGetFinishedTeasSave = (limit: number) => {
  return useInfiniteQuery({
    queryKey: ['save-list'],

    queryFn: ({ pageParam = 0 }) => {
      return getFinishedTeasSave(limit, pageParam as number);
    },

    initialPageParam: 0,

    getNextPageParam: (lastPage: any, allPages: any) => {
      const nextPage = allPages.length * limit;

      if (lastPage?.data.next === null) {
        return undefined;
      }

      if (lastPage?.data.count <= nextPage) {
        return undefined;
      }

      return nextPage;
    },
  });
};

export const usePostFinishedTeasSave = () => {
  return useMutation({
    mutationFn: async (data: any) => await postFinishedTeasSave(data),
  });
};

export const useDeleteBlendingTeasSave = () => {
  return useMutation({
    mutationFn: async (id: number) => await deleteFinishedTeasSave(id),
  });
};
