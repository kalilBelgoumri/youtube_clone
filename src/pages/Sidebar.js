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
      className=" bg-white w-[13vw] justify-center absolute h-screen lg:justify-start"
      id="tabsNav"
    >
      <nav>
        <ul className="flex flex-col items-start ">
          <li className="flex items-center justify-center">
            <Link className="inline-flex items-center" to="/">
              <MdHomeFilled color="black" size="26" />
              <span className="hidden lg:inline-flex pl-6 lg:py-2 lg:font-medium lg:text-sm">
                Acceuil
              </span>
            </Link>
          </li>
          <Link className="inline-flex items-center" to="/Explorer">
            <IoCompassOutline size="26" />
            <span className="hidden lg:inline-flex justify-start pl-6 py-2 font-medium text-sm">
              Explorer
            </span>
          </Link>
          <li className="flex justify-items-start">
            <Link className="inline-flex items-center" to="/Short">
              <ImYoutube2 size="28" />
              <span className="hidden lg:inline-flex justify-start pl-6 py-2 font-medium text-sm">
                Short
              </span>
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link className="inline-flex items-center" to="/">
              <BsCollectionPlay size="22" />
              <span className="hidden lg:inline-flex pl-6 py-2 font-medium text-sm">
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
              <span className="hidden lg:inline-flex pl-6 py-2 font-medium text-sm">
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
