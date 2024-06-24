import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import {
  getMyPurchaseDatas,
  getMyReviews,
  postReview,
  putReview,
} from '@/components/page-layout/myPageLayout/myReview/apis/reviewApis';

export const useGetMyReviews = () => {
  return useQuery({
    queryKey: ['my-review', 'text-review'],
    queryFn: () => getMyReviews(),
  });
};

export const useGetMyPurchaseDatas = () => {
  return useQuery({
    queryKey: ['my-review'],
    queryFn: () => getMyPurchaseDatas(),
  });
};

export const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => await postReview(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['my-review'] });
      openToast('success', '리뷰가 등록되었습니다.');
    },
    onError: () => {
      openToast('error', '리뷰 등록에 실패했습니다.');
    },
  });
};

export const usePutReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data, reviewId }: { data: any; reviewId: number }) => await putReview(data, reviewId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['my-review'] });
      openToast('success', '리뷰가 수정되었습니다.');
    },
    onError: () => {
      openToast('error', '리뷰 수정에 실패했습니다.');
    },
  });
};
