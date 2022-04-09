import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageParam}`);
};

export const InfinteQueries = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <div>
      <h3>InfinteQueries</h3>
      {data?.pages.map((group, index) => (
        <Fragment key={index}>
          {group.data.map((color) => (
            <p key={color.id}>
              {" "}
              {color.id}. {color.label}
            </p>
          ))}
        </Fragment>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        load more
      </button>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};
