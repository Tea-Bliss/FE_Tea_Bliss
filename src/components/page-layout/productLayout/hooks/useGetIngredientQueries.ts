import { useQueries } from '@tanstack/react-query';

import getIngredient from '../apis/ingredientApi';

const useGetIngredientQueries = (ids: number[]) => {
  return useQueries({
    queries: ids.map((id) => ({
      queryKey: ['ingredient', id],
      queryFn: () => getIngredient(id),
    })),
  });
};

export default useGetIngredientQueries;
