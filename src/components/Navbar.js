import BurgerMenu from "./BurgerMenu";
import { useContext, useState } from "react";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { CgMenuGridR } from "react-icons/cg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import YoutubeContext from "../context/YoutubeContext";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const { search, setSearch } = useContext(YoutubeContext);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center justify-center overflow-hidden ">
      <div className="flex items-center justify-center">
        <div className="flex overflow-hidden pl-7">
          <IconButton onClick={toggle} className={open ? "" : null}>
            <MenuIcon />
          </IconButton>
          <img className="max-w-[100px]" src="./youtube.webp" alt="youtube" />
          <span className="-m-4 mt-2 mr-2 text-[12px] text-gray-600">FR</span>
        </div>
      </div>
      {/* Search */}
      <div className="mx-auto flex">
        <div className="flex items-center justify-center bg-white text-black">
          <div className="flex overflow-hidden border border-gray-300">
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              className="w-[30vw] py-[8px] md:w-[30vw]"
              placeholder="Rechercher..."
            />
            <button className="flex items-center justify-center border-l bg-gray-50 px-5">
              <SearchIcon sx={{ color: "gray" }} />
            </button>
          </div>
        </div>
        <div className="ml-3 flex cursor-pointer items-center">
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
