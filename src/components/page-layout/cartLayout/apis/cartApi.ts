import { axiosInstance } from '@/apis/axiosInstance';
import { getCartItems } from '@/components/page-layout/cartLayout/types/cartApiType';

import { SelectedItemsType } from '../components/CartView/CartView';

export const getCartItem = async () => {
  const { data } = await axiosInstance.get<getCartItems[]>('/basket');
  return data;
};

export const postCartItem = async (product?: string, quantity = 1, type = 'normal') => {
  return await axiosInstance.post('/basket', {
    product,
    quantity,
    type,
  });
};

export const patchCartItem = async (product: string, quantity: number, type = 'normal', id: number) => {
  return await axiosInstance.patch(`/basket/${id}`, {
    product,
    quantity,
    type,
  });
};

export const deleteCartItem = async (id: number | null) => {
  return await axiosInstance.delete('/basket', { data: { id } });
};

export const deleteSelectedCartItem = async (product: Pick<SelectedItemsType, 'id'>[]) => {
  return await axiosInstance.delete('/basket/selecteddelete', { data: product });
};
