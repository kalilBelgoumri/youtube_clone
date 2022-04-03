import Navbar from "./components/Navbar";
import NavTabPanel from "./components/NavTabPanel";
import { YoutubeProvider } from "./context/YoutubeContext";

function App() {
  return (
    <YoutubeProvider>
      <div>
        <header>
          <Navbar />
          <NavTabPanel />
        </header>
      </div>
    </YoutubeProvider>
  );
}

export default App;
