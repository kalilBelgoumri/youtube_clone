import { useContext } from "react";
import React from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";
import { Paper } from "@mui/material";
import data from "../data/data";
import PositionedMenu from "../components/MoreIcon";
import { Container } from "@mui/material";

function Home() {
  const { posts } = useContext(YoutubeContext);
  const uniqid = require("uniqid");

  return (
    <>
      <Container maxWidth="xl">
        <div className="overflow-x-scroll scrollbar-hide flex justify-center items-center border-b-[1px] border-t-[1px] ">
          {data.map((item) => (
            <li
              key={uniqid()}
              className="bg-gray-100 flex justify-center items-center cursor-pointer text-center text-sm truncate px-12 m-3 py-1 border border-gray-300 rounded-full"
            >
              {item}
            </li>
          ))}
        </div>
        <div className=" gap-y-3 py-5 mr-[7%] lg:mr-36 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
          {posts?.map((post) => (
            <div
              key={uniqid()}
              className="flex flex-col w-full hover:-translate-y-1 duration-300 hover:scale-110"
            >
              {/* <CardMediaYoutube key={index} videoId={post.id.videoId} /> */}
              {
                <YouTube
                  className=" w-[90%] h-28 xl:w-[90%] xl:h-52"
                  videoId={post.id.videoId}
                />
              }

              <Paper className="flex justify-end  text-sm cursor-pointer pl-7  text-left pt-3 w-[90%] h-24 xl:w-96 xl:h-36">
                {post.snippet.title}
                <div className="invisible hover:visible">
                  <PositionedMenu />
                </div>
              </Paper>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
