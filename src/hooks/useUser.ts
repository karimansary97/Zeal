import {useQuery} from '@tanstack/react-query';

const useUser = () => {
  return useQuery<any>({
    queryKey: ['userInfo'],
    queryFn: () => '',
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useUser;
