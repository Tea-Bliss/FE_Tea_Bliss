import { axiosInstance } from '@/apis/axiosInstance';

interface getTeaDetailType {
  id: number;
  price: number;
  name: string;
  nameEng: string;
  ingredient: number[];
  description: string;
  img: string;
  saleStatus: string;
}

const getTeaDetail = async (id: string) => {
  return await axiosInstance.get<getTeaDetailType>(`/tea/findtea/${id}`);
};

export default getTeaDetail;
