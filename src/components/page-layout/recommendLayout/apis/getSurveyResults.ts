import { axiosInstance } from '@/apis/axiosInstance';

export const getSurveyResults = (params: { taste: string; sale: number; category: string; caffeine: string }) => {
  return axiosInstance.get(`/recommend`, { params });
};
