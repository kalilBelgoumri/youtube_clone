import { useContext } from "react";
import React from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";
import { Paper } from "@mui/material";

function Home() {
  const { posts } = useContext(YoutubeContext);
  const boxRef = React.useRef(null);

  console.log({posts});

  return (
    <>
      <div className="px-10 py-5 gap-x-10 gap-y-5 overflow-hidden grid grid-cols-2 xl:grid-cols-4  ">
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

              <Paper className="w-[27vw] h-28 xl:w-96 xl:h-52">{post.snippet.title}</Paper>
            </div>

            <video src={post.id.videoId}></video>
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
