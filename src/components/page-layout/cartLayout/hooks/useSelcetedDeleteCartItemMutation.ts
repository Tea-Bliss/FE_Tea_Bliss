import { useMutation, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';

import { deleteSelectedCartItem } from '../apis/cartApi';
import { SelectedItemsType } from '../components/CartView/CartView';

const useSelectedDeleteCartItemMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (products: Pick<SelectedItemsType, 'id'>[]) => deleteSelectedCartItem(products),
    onSuccess(_, variables) {
      queryClient.setQueryData<SelectedItemsType[]>(['cartItem'], (oldData) => {
        if (!oldData) return [];
        return oldData.filter((item) => !variables.some((product) => product.id === item.id));
      });
    },
    onError: () => {
      openToast('error', '상품을 삭제하지 못했습니다');
    },
  });
};
export default useSelectedDeleteCartItemMutation;
