import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { axiosInstance } from '@/apis/axiosInstance';
import ROUTE from '@/constants/route';

import useSelectedDeleteCartItemMutation from '../../cartLayout/hooks/useSelcetedDeleteCartItemMutation';

const postPaymentComplete = async (paymentId: string) => {
  return await axiosInstance.post(`/payment/complete?paymentId=${paymentId}`);
};

const usePaymentMutation = () => {
  const router = useRouter();
  const { mutate: selectedDeleteItemMutate } = useSelectedDeleteCartItemMutation();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (paymentId: string) => postPaymentComplete(paymentId),
    onSuccess: (data) => {
      localStorage.setItem('orderSuccess', data.data);
      selectedDeleteItemMutate(data.data.products);
      queryClient.invalidateQueries({ queryKey: ['cartItem'] });
      router.push(ROUTE.HOME);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePaymentMutation;
