import { axiosInstance } from '@/apis/axiosInstance';

export default async function getReview(limit: number) {
  const { data } = await axiosInstance.get(`review/review-list/order?limit=${limit}`);
  return data;
}
