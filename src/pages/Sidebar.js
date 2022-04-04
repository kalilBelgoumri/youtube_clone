import React from "react";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { ImYoutube2 } from "react-icons/im";
import { BsCollectionPlay, BsPlayBtn } from "react-icons/bs";
import { Divider } from "@mui/material";

function Sidebar() {
  return (
    <div
      className=" absolute h-screen w-[13vw] justify-center bg-white lg:justify-start"
      id="tabsNav"
    >
      <nav>
        <ul className="ml-12 flex flex-col items-start ">
          <li className="flex items-center justify-center">
            <Link className="inline-flex items-center" to="/">
              <MdHomeFilled color="black" size="26" />
              <span className="hidden pl-6 lg:inline-flex lg:py-2 lg:text-sm lg:font-medium">
                Acceuil
              </span>
            </Link>
          </li>
          <Link className="inline-flex items-center" to="/Explorer">
            <IoCompassOutline size="26" />
            <span className="hidden justify-start py-2 pl-6 text-sm font-medium lg:inline-flex">
              Explorer
            </span>
          </Link>
          <li className="flex justify-items-start">
            <Link className="inline-flex items-center" to="/Short">
              <ImYoutube2 size="28" />
              <span className="hidden justify-start py-2 pl-6 text-sm font-medium lg:inline-flex">
                Short
              </span>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link className="inline-flex items-center" to="/">
              <BsCollectionPlay size="22" />
              <span className="hidden py-2 pl-6 text-sm font-medium lg:inline-flex">
                Abonnements
                <Divider
                  sx={{
                    width: "215px",
                    left: 0,
                    paddingTop: 3.5,
                    position: "absolute",
                  }}
                />
              </span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="inline-flex items-center" to="/">
              <BsPlayBtn size="22" />
              <span className="hidden py-2 pl-6 text-sm font-medium lg:inline-flex">
                Bibliothèque
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
