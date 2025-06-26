import { useQuery } from '@tanstack/react-query';
import { getCigaretteButt } from '../apis/locationApi';

const useCigaretteButt = (page = 1, perPage = 10) => {
  return useQuery({
    queryKey: ['cigarette-butt', page, perPage],
    queryFn: async () => {
      const res = await getCigaretteButt(page, perPage);
      return res.data;
    },
    staleTime: 0,
  });
};

export default useCigaretteButt;
