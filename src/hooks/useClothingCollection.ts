import { useQuery } from '@tanstack/react-query';
import { getClothingCollection } from '../apis/locationApi';

const useClothingCollection = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['clothing-collection', page, perPage],
    queryFn: async () => {
      const res = await getClothingCollection(page, perPage);
      return res.data;
    },
    staleTime: 0,
  });
};

export default useClothingCollection;
