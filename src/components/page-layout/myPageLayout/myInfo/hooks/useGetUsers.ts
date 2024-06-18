import { useQuery } from '@tanstack/react-query';

import { getUsers } from '@/components/page-layout/myPageLayout/myInfo/apis/profileApis';

const useGetUsers = () => {
  return useQuery({
    queryKey: ['my-info', 'users'],
    queryFn: () => getUsers(),
  });
};

export default useGetUsers;
