import { useQuery } from '@tanstack/react-query';

import { getMyInfo } from '@/components/page-layout/myPageLayout/myInfo/apis/profileApis';

const useGetMyInfo = () => {
  return useQuery({
    queryKey: ['my-info', 'user'],
    queryFn: () => getMyInfo(),
  });
};

export default useGetMyInfo;
