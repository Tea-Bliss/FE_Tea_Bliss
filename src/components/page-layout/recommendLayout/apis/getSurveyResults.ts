import { axiosInstance } from '@/apis/axiosInstance';

export const getSurveyResults = (surveyId: string) => {
  return axiosInstance.get(`/survey/${surveyId}`);
};
