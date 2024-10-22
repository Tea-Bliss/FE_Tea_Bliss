import { axiosInstance } from '@/apis/axiosInstance';

interface getIngredientType {
  data: {
    photo: string;
    explanation: string;
    name: string;
  };
}
const getIngredient = async (id: number) => {
  return await axiosInstance.get<getIngredientType>(`/ingredient/{id}?id=${id}`);
};

export default getIngredient;
