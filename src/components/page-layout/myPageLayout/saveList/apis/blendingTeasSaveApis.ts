import { axiosInstance } from '@/apis/axiosInstance';

export const getFinishedTeasSave = (limit: number, offset: number) => {
  return axiosInstance.get('');
};

export const postFinishedTeasSave = (data: any) => {
  return axiosInstance.post('', data);
};

export const deleteFinishedTeasSave = (id: number) => {
  return axiosInstance.delete('');
};
