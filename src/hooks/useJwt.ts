import {useQuery} from '@tanstack/react-query';

const useJwt = () => {
  return useQuery({
    queryKey: ['Jwt'],
    queryFn: () => '',
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useJwt;
