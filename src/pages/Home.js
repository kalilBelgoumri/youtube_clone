import { useContext } from "react";
import React from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";
import { Paper } from "@mui/material";
import data from "../data/data";

function Home() {
  const { posts } = useContext(YoutubeContext);

  console.log({ posts });
  console.log(data);
  return (
    <>
      <div className="flex justify-center items-center border-b-[1px] border-t-[1px] px-20 scroll-pl-6 snap-x">
        {data.map((item) => (
          <div className="bg-gray-100 cursor-pointer text-center truncate px-5 m-3 py-2 border rounded-full snap-start">
            {item}
          </div>
        ))}
      </div>
      <div className="px-10 gap-y-5 py-5 grid grid-cols-2 xl:grid-cols-8  ">
        {posts?.map((post, index) => (
          <>
            <div className="flex flex-col w-full hover:-translate-y-1 duration-300 hover:scale-110">
              {/* <CardMediaYoutube key={index} videoId={post.id.videoId} /> */}
              {
                <YouTube
                  containerClassName=" "
                  className=" w-[27vw] h-28 xl:w-96 xl:h-52"
                  videoId={post.id.videoId}
                />
              }

              <Paper className="flex justify-center text-center pt-3 w-[27vw] h-28 xl:w-96 xl:h-48">
                {post.id.title}
              </Paper>
            </div>

            <video src={post.id.videoId}></video>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
