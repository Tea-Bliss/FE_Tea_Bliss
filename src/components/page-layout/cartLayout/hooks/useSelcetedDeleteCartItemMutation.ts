import { useMutation, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';

import { deleteSelectedCartItem } from '../apis/cartApi';
import { SelectedItemsType } from '../components/CartView/CartView';

const useSelectedDeleteCartItemMutation = (product: SelectedItemsType[]) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteSelectedCartItem(product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItem'] });
    },
    onError: () => {
      openToast('error', '상품을 삭제하지 못했습니다');
    },
  });
};
export default useSelectedDeleteCartItemMutation;
