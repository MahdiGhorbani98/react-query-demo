import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

export const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, isError, error, data } = useSuperHeroData(heroId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      RQSuperHeroes
      <div>
        {data?.data.title} - {data?.data.goals}
      </div>
    </div>
  );
};
