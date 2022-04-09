import { Link } from "react-router-dom";
import {
  useAddSuperHeroes,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { useState } from "react";

const RQSuperHeroes = () => {
  const [title, setTitle] = useState("");
  const [goals, setGoals] = useState("");

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
  const { mutate } = useAddSuperHeroes();

  function SubmitHero() {
    const hero = { title, goals };
    mutate(hero);
  }

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h1>RQSuperHeroes</h1>
      <input
        type="text"
        value={title}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={goals}
        placeholder="goals"
        onChange={(e) => setGoals(e.target.value)}
      />

      <button onClick={SubmitHero}>Submit Hero</button>
      <button onClick={refetch}>fetch Data</button>
      {data?.data.map((item) => (
        <Link key={item.id} to={`/rq-super-heroes/${item.id}`}>
          <div>{item.title}</div>
        </Link>
      ))}
    </>
  );
};
export default RQSuperHeroes;
