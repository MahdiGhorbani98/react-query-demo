import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("data fetched", data);
  };
  const onError = (error) => {
    console.log("error occurred", error);
  };

  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>RQSuperHeroes</h1>
      {/* <button onClick={refetch}>Fetch</button> */}
      {data?.data.map((item) => (
        <Link key={item.id} to={`/rq-super-heroes/${item.id}`}>
          <div>{item.title}</div>
        </Link>
      ))}
    </>
  );
};
export default RQSuperHeroes;
