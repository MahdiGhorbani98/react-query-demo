import { useQuery } from "react-query";
import axios from "axios";

const fetchFootballist = (heroId) => {
  return axios.get(`http://localhost:5000/footballist/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchFootballist(heroId));
};
