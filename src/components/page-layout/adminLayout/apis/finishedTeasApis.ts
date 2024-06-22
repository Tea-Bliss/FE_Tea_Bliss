import axiosInstance from '@/apis/axiosInstance';
import { PatchFinishedTeasType, PostFinishedTeasType } from '@/components/page-layout/adminLayout/types/productType';
import createQueryString from '@/components/page-layout/adminLayout/utils/createQueryString';

export const getAllTeas = (query: { page?: number; limit?: number }) => {
  return axiosInstance.get(`tea/all?${createQueryString(query)}`);
};

export const getTeasSeasonFilter = (query: { season: string; page?: number; limit?: number }) => {
  return axiosInstance.get(`tea/season?${createQueryString(query)}`);
};

export const getOneTea = (id: number) => {
  return axiosInstance.get(`tea/findtea?id=${id}`);
};

export const postTea = (data: PostFinishedTeasType) => {
  return axiosInstance.post('tea/submit', data);
};

export const patchTea = (data: PatchFinishedTeasType, id: number) => {
  return axiosInstance.patch(`tea/patch/${id}`, data);
};

export const deleteTea = (id: number) => {
  return axiosInstance.delete(`tea/delete/${id}`);
};
