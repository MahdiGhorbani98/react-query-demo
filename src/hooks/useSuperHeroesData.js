import { useQuery } from "react-query";
import axios from "axios";

const fetchFootballist = () => {
  return axios.get("http://localhost:5000/footballist");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("footballist", fetchFootballist, {
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const footballist = data.data.map((item) => item.title);
    //   return footballist;
    // },
  });
};
