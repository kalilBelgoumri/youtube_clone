import Navbar from "./components/Navbar";
import NavTabPanel from "./components/NavTabPanel";
import { YoutubeProvider } from "./context/YoutubeContext";
import Home from "./pages/Home";

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
