import { useContext } from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";

function Home() {
  const { posts } = useContext(YoutubeContext);
  console.log(posts);
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {posts?.map((post, index) => (
        <>
          <CardMediaYoutube video={post.id.videoId} />
        
        </>
      ))}
    </div>
  );
}

export default Home;
