import { createContext, useState, useEffect } from "react";
import axios from "axios";

const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const key = process.env.REACT_APP_GOOGLE_API

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?maxResults=5&part=id&type=video&channelId=UCgdHSFcXvkN6O3NXvif0-pA&key=${key}`
        )
        .then((res) => {
          setPosts(res.data.items);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);
  console.log(posts);

  return (
    <YoutubeContext.Provider value={{ posts }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeContext;
