import { useQuery } from '@tanstack/react-query';

import { getLooseLeafTeas } from '@/components/page-layout/myBlendingLayout/apis/looseLeafTeas';

export const useGetLooseLeafTeas = () => {
  return useQuery({
    queryKey: ['my-blending', 'teas'],
    queryFn: () => getLooseLeafTeas(),
  });
};
