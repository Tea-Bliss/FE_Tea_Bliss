import { useMutation } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import { postSurvey } from '@/components/page-layout/surveyLayout/apis/postSurvey';

export const usePostSurvey = () => {
  return useMutation({
    mutationFn: async (data: { taste: string; sale: number; category: string; caffeine: string }) =>
      await postSurvey(data),
    onError: () => {
      openToast('error', '설문조사 결과 전송에 실패했습니다.');
    },
    onSuccess: () => {
      openToast('success', '설문조사 결과가 전송되었습니다.');
    },
  });
};
