import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { HiUpload } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/material";

function NavbarOk() {
  const [search, setSearch] = useState("");
  return (
   <Container>
    <div className="flex justify-center items-center overflow-hidden pt-2">
      <div className="flex justify-center items-center">
        <div className="mb-5 pl-3">
          <BurgerMenu />
        </div>
        <div className="flex pl-7 overflow-hidden">
          <img className="max-w-[35vh]" src="./youtube.webp" alt="youtube" />
          <span className="text-[6px] text-gray-600 -m-2 mt-2 mr-3">FR</span>
        </div>
      </div>
      {/* Search */}
      <div className="flex mx-auto">
        <div class="font-sans text-black bg-white flex items-center justify-center">
          <div class="border overflow-hidden flex">
            <input type="text" class="px-5 py-[3px]" placeholder="Search..." />
            <button class="flex items-center justify-center px-4 border-l">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="cursor-pointer flex items-center ml-3">
          <IconButton>
            <MicSharpIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <IconButton>
          <img className="w-4" src="./youtube.svg" alt="" />
        </IconButton>
        <IconButton>
          <CgMenuGridR fontSize="small" />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    </div>
    </Container>
  );
}

export default NavbarOk;
