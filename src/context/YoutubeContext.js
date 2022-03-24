import { createContext, useState, useEffect } from "react";
import axios from "axios";

const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");





  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=id&type=video&key=${process.env.REACT_APP_GOOGLE_API}`
        )
        .then((res) => {
          setPosts(res.data.items);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [search]);
  console.log(posts);

  return (
    <YoutubeContext.Provider
      value={{ posts, search, setSearch }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeContext;
