import { useQueries } from "react-query";
import axios from "axios";

const fetchFootballist = (userId) => {
  return axios.get(`http://localhost:5000/footballist/${userId}`);
};

export const DynamicParallelQuery = ({ heroId }) => {
  const queryResult = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["footballist", id],
        queryFn: () => fetchFootballist(id),
      };
    })
  );

  return (
    <div>
      DynamicParallelQuery
      <>
        {queryResult?.map((item, index) => (
          <p key={index}>{item.data?.data.title}</p>
        ))}
      </>
    </div>
  );
};
