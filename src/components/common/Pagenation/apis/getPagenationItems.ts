import axiosInstance from '@/apis/axiosInstance';

export default async function getPagenationItems(type: string, page: number, limit: number) {
  const { data } = await axiosInstance.get(`tea/${type}?page=${page}&limit=${limit}`);
  return data;
}
