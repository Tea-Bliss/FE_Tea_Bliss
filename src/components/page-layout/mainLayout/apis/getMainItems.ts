import { axiosInstance } from '@/apis/axiosInstance';

export default async function getMainItems() {
  const { data } = await axiosInstance.get(`tea/recommend?page=1&limit=8`);
  return data;
}
