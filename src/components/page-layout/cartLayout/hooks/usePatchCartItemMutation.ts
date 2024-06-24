import { useMutation, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';

import { patchCartItem } from '../apis/cartApi';

const usePatchCartItemMutation = (product: string, quantity = 1, id: number, type = 'normal') => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => patchCartItem(product, quantity, type, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItem'] });
    },
    onError: () => {
      openToast('error', '상품을 수정하지 못했습니다.');
    },
  });
};

export default usePatchCartItemMutation;
