import { useQuery } from '@tanstack/react-query';
import { getFluorescentBattery } from '../apis/locationApi';

const useFluorescentBattery = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['fluorescent-battery', page, perPage],
    queryFn: async () => {
      const res = await getFluorescentBattery(page, perPage);
      return res.data;
    },
    staleTime: 0,
  });
};

export default useFluorescentBattery;
