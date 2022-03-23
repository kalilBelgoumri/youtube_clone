import { createContext, useState, useEffect } from "react";
import axios from "axios";

const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
 
  const [posts, setPosts] = useState([]);

  const key = "AIzaSyDXK_ArJGqFur36FitNKemkBH4xs9rsxjE";

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${key}
         &part=snippet,contentDetails,statistics,status`
        )
        .then((res) => {
          setPosts(res.data.items);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
   }, []);
   
  return (
    <YoutubeContext.Provider value={{ posts }}>
      {children}
    </YoutubeContext.Provider>
  );
};

export default YoutubeContext;
