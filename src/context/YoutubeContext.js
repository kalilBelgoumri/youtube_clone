import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   const fetchData = useCallback (function async ()  {
  //     await axios
  //       .get(
  //         `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&statistics&brandingSettings&contentDetails&contentOwnerDetailssnippet&thumbnails&snippet&field&id&type=video&title&key=${process.env.REACT_APP_GOOGLE_API}`
  //       )
  //       .then((res) => {
  //         setPosts(res.data.items);
  //       })
  //       .catch((error) => error);
  //   })
  //   fetchData()
  // }, [search])

  const fetchData = useCallback(async () => {
    await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&statistics&brandingSettings&contentDetails&contentOwnerDetailssnippet&thumbnails&snippet&field&id&type=video&title&key=${process.env.REACT_APP_GOOGLE_API}`
      )
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <YoutubeContext.Provider value={{ posts, search, setSearch }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeContext;
