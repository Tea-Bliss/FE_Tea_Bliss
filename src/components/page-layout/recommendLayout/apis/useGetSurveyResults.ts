'use client';

import { useQuery } from '@tanstack/react-query';

import { getSurveyResults } from './getSurveyResults';

const useGetSurveyResults = (surveyId: string) => {
  return useQuery({
    queryKey: ['results', surveyId],
    queryFn: async () => {
      const response = await getSurveyResults(surveyId);
      return response.data;
    },
  });
};

export default useGetSurveyResults;
