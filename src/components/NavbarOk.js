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

function NavbarOk() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex h-20 justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="mb-6 ml-3">
          <BurgerMenu />
        </div>
        <div className="flex pl-20">
          <img
            className="max-w-[12vw]"
            src="./youtube.webp"
            alt="youtube"
          />
        </div>
      </div>
      {/* Search */}
      <div className="flex mx-auto">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 500,
            height: 50,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Chercher"
            inputProps={{ "aria-label": "Chercher" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Divider sx={{ height: "100%", m: 5 }} orientation="vertical" />
          <IconButton
            type="submit"
            sx={{
              p: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className="cursor-pointer flex items-center ml-3">
          <IconButton>
            <MicSharpIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <IconButton>
          <img src="./youtube.svg" alt="" />
        </IconButton>
        <IconButton>
          <CgMenuGridR />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
}

export default NavbarOk;
