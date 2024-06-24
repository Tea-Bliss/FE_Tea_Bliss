import { useMutation, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';

import { postCartItem } from '../apis/cartApi';

const useAddCartItemMutation = (product?: string, quantity = 1, type = 'normal') => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => postCartItem(product, quantity, type),
    onSuccess: () => {
      openToast('success', '장바구니에 상품을 담았습니다.');
      queryClient.invalidateQueries({ queryKey: ['cartItem'] });
    },
    onError: () => {
      openToast('error', '장바구니에 상품을 담지 못했습니다.');
    },
  });
};

export default useAddCartItemMutation;
