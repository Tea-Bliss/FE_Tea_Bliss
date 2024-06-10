import axiosInstance from '@/apis/axiosInstance';

export default async function getPagenationItems(page: number, limit: number) {
  const { data } = await axiosInstance.get(`?page=${page}&limit${limit}`);
  return data;
}
