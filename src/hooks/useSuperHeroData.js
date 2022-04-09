import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchFootballist = (heroId) => {
  return axios.get(`http://localhost:5000/footballist/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], () => fetchFootballist(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("footballist")
        ?.data?.find((item) => item.id === parseInt(heroId));

      if (hero) {
        return { data: hero };
      } else {
        return undefined;
      }
    },
  });
};
