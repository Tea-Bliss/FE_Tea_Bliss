import { useQuery } from '@tanstack/react-query';

import { getCartItem } from '@/components/page-layout/cartLayout/apis/cartApi';

export const useCartItemQuery = () => {
  const isBrowser = typeof window !== 'undefined';
  const token = isBrowser ? localStorage.getItem('token') : null;

  return useQuery({ queryKey: ['cartItem'], queryFn: getCartItem, enabled: !!token });
};
