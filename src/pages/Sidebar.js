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
      className="bg-[##F9F9] w-[13vw] absolute h-screen flex flex-row ml-4 mt-10 "
      id="tabsNav"
    >
      <nav>
        <ul className="flex flex-col">
          <li>
            <Link className="inline-flex items-center" to="/">
              <MdHomeFilled color="black" size="26" />
              <span className="pl-6 py-2 font-medium text-sm">Acceuil</span>
            </Link>
          </li>
          <Link className="inline-flex items-center" to="/Explorer">
            <IoCompassOutline size="26" />
            <span className="pl-6 py-2 font-medium text-sm">Explorer</span>
          </Link>
          <li>
            <Link className="inline-flex items-center" to="/Short">
              <ImYoutube2 size="28" />
              <span className="pl-6 py-2 font-medium text-sm">Short</span>
            </Link>
          </li>
          <li>
            <Link className="inline-flex items-center" to="/">
              <BsCollectionPlay size="22" />
              <span className="pl-6 py-2 font-medium text-sm">
                Abonnements
                <Divider sx={{ width: "10vw", paddingTop: 3 }} />
              </span>
            </Link>
          </li>
          <li>
            <Link className="inline-flex items-center" to="/">
              <BsPlayBtn size="22" />
              <span className="pl-6 py-2 font-medium text-sm">
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