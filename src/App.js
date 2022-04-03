import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import NavTabPanel from "./components/NavTabPanel";
import { YoutubeProvider } from "./context/YoutubeContext";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import Sidebar from "./pages/Sidebar";

function AppRoute() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/explorer", element: <Explorer /> },
  ]);
  return routes;
}

function App() {
  return (
    <>
      <YoutubeProvider>
        <Router>
          <Navbar />
          <Sidebar />
          <AppRoute />
        </Router>
      </YoutubeProvider>
    </>
  );
}

export default App;
