import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import axios from "axios";

const fetchFootballist = () => {
  return axios.get("http://localhost:5000/footballist");
};
const addSuperHeroes = (hero) => {
  return axios.post("http://localhost:5000/footballist", hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("footballist", fetchFootballist, {
    onSuccess,
    onError,
  });
};

export const useAddSuperHeroes = (hero) => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHeroes, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("footballist");
    //   queryClient.setQueryData("footballist", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, data.data],
    //     };
    //   });
    // },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("footballist");
      const previousHeroData = queryClient.getQueryData("footballist");
      queryClient.setQueryData("footballist", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return { previousHeroData };
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData("footballist", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("footballist");
    },
  });
};
