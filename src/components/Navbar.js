import BurgerMenu from "./BurgerMenu";
import { useContext,useState } from "react";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { CgMenuGridR } from "react-icons/cg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/material";
import YoutubeContext from "../context/YoutubeContext";

function Navbar() {
  const [query,setQuery] = useState([])
  const posts = useContext(YoutubeContext);

  return (
      <div className="flex justify-center items-center overflow-hidden ">
        <div className="flex justify-center items-center">
          <div className="mb-5 pl-1 pr-4">
            <BurgerMenu />
          </div>
          <div className="flex pl-7 overflow-hidden">
            <img className="max-w-[100px]" src="./youtube.webp" alt="youtube" />
            <span className="text-[12px] text-gray-600 -m-4 mt-2 mr-2">FR</span>
          </div>
        </div>
        {/* Search */}
        <div className="flex mx-auto">
          <div className="text-black bg-white flex items-center justify-center">
            <div className="border border-gray-300 overflow-hidden flex">
              <input
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                type="text"
                className="py-[8px] w-[30vw] md:w-[30vw]"
                placeholder="Rechercher..."
              />
              <button className="flex items-center justify-center px-5 bg-gray-50 border-l">
                <SearchIcon sx={{ color: "gray" }} />
              </button>
            </div>
          </div>
          <div className="cursor-pointer flex items-center ml-3">
            <IconButton>
              <MicSharpIcon fontSize="medium" sx={{ color: "black" }} />
            </IconButton>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <IconButton>
            <img className="w-8" src="./youtube.svg" alt="youtube" />
          </IconButton>
          <IconButton>
            <CgMenuGridR fontSize="xl" color="black" />
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <AccountCircle fontSize="large" />
          </IconButton>
        </div>
      </div>
  );
}

export default Navbar;
