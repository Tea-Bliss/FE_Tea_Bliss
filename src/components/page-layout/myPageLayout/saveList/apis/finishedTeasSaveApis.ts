import { axiosInstance } from '@/apis/axiosInstance';

export const getBlendingTeasSave = (limit: number, offset: number, owner: string) => {
  return axiosInstance.get('');
};

export const postBlendingTeasSave = (data: any) => {
  return axiosInstance.post('', data);
};

export const deleteBlendingTeasSave = (id: number) => {
  return axiosInstance.delete('');
};
