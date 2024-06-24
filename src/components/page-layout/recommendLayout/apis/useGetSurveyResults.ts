'use client';

import { useQuery } from '@tanstack/react-query';
import { getSurveyResults } from './getSurveyResults';

const useGetSurveyResults = (params: { taste: string; sale: number; category: string; caffeine: string }) => {
  return useQuery({
    queryKey: ['results', params],
    queryFn: async () => {
      const response = await getSurveyResults(params);
      return response.data;
    },
  });
};

export default useGetSurveyResults;
