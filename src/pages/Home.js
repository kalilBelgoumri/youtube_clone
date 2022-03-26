import { useContext } from "react";
import React from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";
import { Paper } from "@mui/material";
import data from "../data/data";
import MoreIcon from "@mui/icons-material/MoreVert";

function Home() {
  const { posts } = useContext(YoutubeContext);

  console.log({ posts });
  console.log(data);

  return (
    <>
      <div className="overflow-x-scroll scrollbar-hide flex justify-center items-center border-b-[1px] border-t-[1px] px-20">
        {data.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 flex justify-center items-center cursor-pointer text-center text-sm truncate px-16 m-3 py-2 border border-gray-300 rounded-full"
          >
            {item}
          </li>
        ))}
      </div>
      <div className="px-10 gap-y-5 py-5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {posts?.map((post, index) => (
          <>
            <div
              key={index}
              className="flex flex-col w-full hover:-translate-y-1 duration-300 hover:scale-110"
            >
              {/* <CardMediaYoutube key={index} videoId={post.id.videoId} /> */}
              {
                <YouTube
                  className=" w-[27vw] h-28 xl:w-96 xl:h-52"
                  videoId={post.id.videoId}
                />
              }

              <Paper className="flex text-sm cursor-pointer px-7  text-left pt-3 w-[27vw] h-20 xl:w-96 xl:h-36">
                {post.snippet.title}
                <MoreIcon />
              </Paper>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
