import { useQuery } from "react-query";
import axios from "axios";

const fetchFootballist = () => {
  return axios.get("http://localhost:5000/footballist");
};

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    "footballist",
    fetchFootballist
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>RQSuperHeroes</h1>
      {data?.data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};
export default RQSuperHeroes;
