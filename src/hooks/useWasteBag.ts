import { useQuery } from '@tanstack/react-query';
import { getWasteBag } from '../apis/locationApi';

const useWasteBag = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['waste-bag', page, perPage],
    queryFn: async () => {
      const res = await getWasteBag(page, perPage);
      return res.data;
    },
    staleTime: 0,
  });
};

export default useWasteBag;
