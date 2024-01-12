import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import axiosInstance from '../config/axiosInstance';

type useGetQueryType = {
  queryKey: string[];
  endPoint: string;
  options?: UseQueryOptions<any>;
  body?: {};
};
export const useGetQuery = <T>({
  queryKey,
  endPoint,
  body,
  options,
}: useGetQueryType) => {
  return useQuery<T, Error>({
    queryKey,
    queryFn: async () => {
      const {data: responseData} = await axiosInstance.get(endPoint, body);
      return responseData;
    },
    ...options,
  });
};
