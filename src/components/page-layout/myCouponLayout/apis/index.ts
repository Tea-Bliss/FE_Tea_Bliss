import { axiosSubInstance } from '@/apis/axiosInstance';

export default async function getPagenationCoupon(used: number, page: number, limit: number) {
  const { data } = await axiosSubInstance.get(`coupon/?page=${page}&limit=${limit}&used=${used}`);
  return data;
}
