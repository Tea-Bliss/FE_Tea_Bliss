import axiosInstance from '@/apis/axiosInstance';

export default async function getPagenationItems(
  type: string,
  page: number,
  limit: number,
  caffeine: string | null,
  season: string | null
) {
  if (caffeine !== null) {
    const { data } = await axiosInstance.get(`tea/${type}?page=${page}&limit=${limit}&caffeine=${caffeine}`);
    return data;
  } else if (season !== null) {
    const { data } = await axiosInstance.get(`tea/${type}?page=${page}&limit=${limit}&season=${season}`);
    return data;
  } else {
    const { data } = await axiosInstance.get(`tea/${type}?page=${page}&limit=${limit}`);
    return data;
  }
}
