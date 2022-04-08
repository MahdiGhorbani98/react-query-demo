import axios from "axios";
import { useState, useEffect } from "react";

const SuperHeroes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/footballist")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        seterror(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data.map((item) => (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          key={item.id}
        >
          <p style={{ marginRight: 50 }}>{item.title} :</p>
          <p style={{ color: "red" }}>{item.goals}</p>
        </div>
      ))}
    </div>
  );
};
export default SuperHeroes;
