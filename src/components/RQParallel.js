import { useQuery } from "react-query";
import axios from "axios";

const fetchFootballist = () => {
  return axios.get("http://localhost:5000/footballist");
};

const fetchFriends = () => {
  return axios.get("http://localhost:5000/friends");
};

export const RQParallel = () => {
  const { data: footballistData } = useQuery(
    "footbalistParallel",
    fetchFootballist
  );

  const { data: friendData } = useQuery("friendParallel", fetchFriends);

  return (
    <div>
      <h1>RQParallel</h1>
      <p>
        {friendData?.data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </p>
    </div>
  );
};
