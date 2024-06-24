import axiosInstance from '@/apis/axiosInstance';

export const getBlendingTeasSave = (limit: number, offset: number) => {
  return axiosInstance.get('');
};

export const postBlendingTeasSave = (data: any) => {
  return axiosInstance.post('', data);
};

export const deleteBlendingTeasSave = (id: number) => {
  return axiosInstance.delete('');
};
