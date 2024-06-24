import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useRouter } from 'next/navigation';

import { axiosInstance } from '@/apis/axiosInstance';
import ROUTE from '@/constants/route';

const postPaymentComplete = async (paymentId: string) => {
  return await axiosInstance.post(`/payment/complete?paymentId=${paymentId}`);
};

const usePaymentMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (paymentId: string) => postPaymentComplete(paymentId),
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['cartItem'] });
      localStorage.removeItem('selectedItems');
      router.push(ROUTE.HOME);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePaymentMutation;
