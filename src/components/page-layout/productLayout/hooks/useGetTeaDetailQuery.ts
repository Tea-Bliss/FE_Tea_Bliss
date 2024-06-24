import { useQuery } from '@tanstack/react-query';

import getTeaDetail from '../apis/productApi';

const useGetTeaDetailQuery = (id: string) => {
  return useQuery({ queryKey: ['teaDetail', id], queryFn: () => getTeaDetail(id) });
};

export default useGetTeaDetailQuery;
