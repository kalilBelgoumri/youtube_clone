import { useContext } from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";
import YouTube from "react-youtube";

function Home() {
  const { posts } = useContext(YoutubeContext);
  console.log(posts);
  return (
    <>
      <div className=" overflow-hidden grid grid-cols-4 gap-4 gap-5">
        {posts?.map((post, index) => (
          <>
            {/* <CardMediaYoutube key={index} video={post.id.videoId} /> */}
            <YouTube
              className="w-96 h-52"
              videoId={post.id.videoId} // defaults -> null
              // defaults -> null
            />
          </>
        ))}
      </div>
    </>
  );
}

export default Home;
