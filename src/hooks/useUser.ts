import {useQuery} from '@tanstack/react-query';

const useUser = () => {
  return useQuery({
    queryKey: ['User'],
    queryFn: () => {},
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useUser;
