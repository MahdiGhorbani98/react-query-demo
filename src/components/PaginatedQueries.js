import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:5000/colors?_limit=2&_page=${pageNumber}`);
};

export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    { keepPreviousData: true }
  );

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>{error.message}</h3>;

  return (
    <div>
      <h2>PaginatedQueries</h2>
      {data?.data.map((item) => (
        <div key={item.id}>
          {item.id}. {item.label}
        </div>
      ))}

      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber === 1}
      >
        prev Page
      </button>
      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber === 4}
      >
        next Page
      </button>
      {isFetching && <p>Loading...</p>}
    </div>
  );
};
