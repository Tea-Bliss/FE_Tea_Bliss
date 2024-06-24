import { axiosInstance } from '@/apis/axiosInstance';

export const postSurvey = (data: { taste: string; sale: number; category: string; caffeine: string }) => {
  return axiosInstance.post(`survey`, data);
};
