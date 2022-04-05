import { useContext } from "react";
import React from "react";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";
import { Paper } from "@mui/material";
import data from "../data/data";
import PositionedMenu from "../components/MoreIcon";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

function Home() {
  const { posts } = useContext(YoutubeContext);
  const uniqid = require("uniqid");

  return (
    <>
      <div className="bg-[#f9f9f9] pl-[16vw]">
        <div className="flex items-center justify-center overflow-x-scroll border-b-[1px] border-t-[1px] pl-[50vw] pr-[2vw] scrollbar-hide ">
          <MdOutlineKeyboardArrowLeft
            className="left- absolute cursor-pointer"
            color="black"
            size="20"
          />
          {data.map((item) => (
            <li
              key={uniqid()}
              className="m-3 flex cursor-pointer items-center justify-center truncate rounded-full border border-gray-300 bg-gray-100 px-12 py-1 text-center text-sm"
            >
              {item}
            </li>
          ))}
          <MdOutlineKeyboardArrowRight
            className="absolute right-0 cursor-pointer"
            color="black"
            size="20"
          />
        </div>

        <div className=" grid grid-cols-2 gap-y-3 py-5 md:mr-[1%] lg:mr-2 lg:grid-cols-3 xl:mr-[1%] xl:grid-cols-4  ">
          {posts?.map((post) => (
            <div
              key={uniqid()}
              className="flex w-full flex-col duration-300 hover:-translate-y-1 hover:scale-110"
            >
              {
                <YouTube
                  className=" h-28 w-[90%] xl:h-52 xl:w-[90%]"
                  videoId={post.id.videoId}
                />
              }
              <Paper className="flex h-24 w-[90%] cursor-pointer justify-end break-all  pl-7 pt-3 text-left text-sm xl:h-36">
                {post.snippet.title}
                <PositionedMenu />
              </Paper>
            </div>
          ))}
          <div />
        </div>
      </div>
    </>
  );
}

export default Home;
