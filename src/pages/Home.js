import { useContext } from "react";
import CardMediaYoutube from "../components/CardMedia";
import YoutubeContext from "../context/YoutubeContext";

function Home() {
  const { posts } = useContext(YoutubeContext);
  console.log(posts);
  return (
    <div>
      {posts?.map((post, index) => (
        <ul className="flex flex-row flex-wrap">
          <li key={index}>
            <CardMediaYoutube typo={post.contentDetails.dimension} />
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Home;
