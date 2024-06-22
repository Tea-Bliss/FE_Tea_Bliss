import axiosInstance from '@/apis/axiosInstance';
import { PostOrPutLooseLeafTeaType } from '@/components/page-layout/adminLayout/types/productType';
import createQueryString from '@/components/page-layout/adminLayout/utils/createQueryString';

export const getIngredients = (query: { category?: string; page?: number; limit?: number }) => {
  return axiosInstance.get(`ingredient?${createQueryString(query)}`);
};

export const getOneIngredient = (id: number) => {
  return axiosInstance.get(`ingredient/${id}`);
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
