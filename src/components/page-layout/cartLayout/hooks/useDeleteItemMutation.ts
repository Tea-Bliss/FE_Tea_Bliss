import { useMutation, useQueryClient } from '@tanstack/react-query';

import openToast from '@/components/common/Toast/features/openToast';
import { deleteCartItem } from '@/components/page-layout/cartLayout/apis/cartApi';

const useDeleteItemMutation = (id: number | null) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cartItem'] });
    },
    onError: () => {
      openToast('error', '상품을 삭제하지 못했습니다');
    },
  });
};
export default useDeleteItemMutation;
