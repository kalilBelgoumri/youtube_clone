import { useContext, useState, useRef } from "react";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { CgMenuGridR } from "react-icons/cg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import YoutubeContext from "../context/YoutubeContext";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../assets/live.png";

function Navbar() {
  const { search, setSearch } = useContext(YoutubeContext);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const input = useRef(null);

  const handleClick = () => {
    input.current.classList.add("inputAdd");
  };

  return (
    <div className="  flex items-center overflow-hidden ">
      <div className="flex items-center">
        <div className="flex overflow-hidden ">
          <IconButton onClick={toggle} className={open ? "" : null}>
            <MenuIcon />
          </IconButton>
          <img className="max-w-[100px]" src="./youtube.webp" alt="youtube" />
          <span className="-m-4 mt-2 mr-2 text-[12px] text-gray-600">FR</span>
        </div>
      </div>
      {/* Search */}
      <div className=" mx-auto flex">
        <div className="flex items-center justify-center bg-white text-black">
          <div className="flex items-center overflow-hidden border border-gray-300    ">
            <div className="absolute hidden">
              <SearchIcon sx={{ color: "gray" }} />
            </div>
            <input
              ref={input}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-[25vw] border  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400  focus:w-[30vw] focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Chercher..."
              type="text"
              name="search"
              onClick={handleClick}
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
      <div className="inputAdd bg-red-600 " />

      <div className="flex items-center ">
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
          <img src={img} alt="account" />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
