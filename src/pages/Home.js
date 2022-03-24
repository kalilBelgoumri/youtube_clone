import { useContext } from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";

function Home() {
  const { posts } = useContext(YoutubeContext);
  console.log(posts);
  return (
    <>
      <div className="px-10 py-5 overflow-hidden grid grid-cols-2 xl:grid-cols-4 gap-4 ">
        {posts?.map((post, index) => (
          <>
            {/* <CardMediaYoutube key={index} video={post.id.videoId} /> */}
            <YouTube
            containerClassName="hover:-translate-y-1 duration-300 hover:scale-110"
              className=" w-[27vw] h-28 xl:w-96 xl:h-52"
              videoId={post.id.videoId} // defaults -> null
              onPlay
              // defaults -> null
            />
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
