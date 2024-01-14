import {UseMutationOptions, useMutation} from '@tanstack/react-query';

import axiosInstance from '../config/axiosInstance';
import ErrorQuery from '../types/ErrorQuery';

type usePostQueryType<T> = {
  endPoint: string;
  options?: UseMutationOptions<unknown, ErrorQuery, T>;
  errorAlert?: boolean;
  deleteData?: boolean;
  update?: boolean;
  patch?: boolean;
};

const useMutationQuery = <T>({
  endPoint,
  deleteData,
  update,
  patch,
  options,
}: usePostQueryType<T>) => {
  return useMutation({
    mutationFn: async (data: T): Promise<unknown> => {
      if (update) {
        return await axiosInstance.put(endPoint, data);
      }
      if (deleteData) {
        return await axiosInstance.delete(endPoint);
      }
      if (patch) {
        return await axiosInstance.patch(endPoint, data);
      }
      return await axiosInstance.post(endPoint, data);
    },
    ...options,
  });
};
export default useMutationQuery;
