import axiosInstance from '@/apis/axiosInstance';
import { PostOrPutLooseLeafTeaType } from '@/components/page-layout/adminLayout/types/productType';

export const getIngredients = (query: { category?: string | null; page?: number; limit?: number }) => {
  return axiosInstance.get(
    `ingredient?page=${query.page}&limit=${query.limit}${query?.category ? `&category=${query.category}` : ''}`
  );
};

export const getOneIngredient = (id: number) => {
  return axiosInstance.get(`ingredient/${id}?id=${id}`);
};

export const postIngredient = (data: PostOrPutLooseLeafTeaType) => {
  return axiosInstance.post('ingredient', data);
};

export const putIngredient = (data: PostOrPutLooseLeafTeaType) => {
  return axiosInstance.put(`ingredient/one`, data);
};

export const deleteIngredient = (id: number) => {
  return axiosInstance.delete(`ingredient/${id}`);
};
