import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import {
  deleteBlendingTeasSave,
  getBlendingTeasSave,
  postBlendingTeasSave,
} from '@/components/page-layout/myPageLayout/saveList/apis/finishedTeasSaveApis';

export const useGetBlendingTeasSave = (limit: number) => {
  return useInfiniteQuery({
    queryKey: ['save-list', 'blending-save'],

    queryFn: ({ pageParam = 0 }) => {
      return getBlendingTeasSave(limit, pageParam as number);
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

export const usePostBlendingTeasSave = () => {
  return useMutation({
    mutationFn: async (data: any) => await postBlendingTeasSave(data),
  });
};

export const useDeleteBlendingTeasSave = () => {
  return useMutation({
    mutationFn: async (id: number) => await deleteBlendingTeasSave(id),
  });
};
