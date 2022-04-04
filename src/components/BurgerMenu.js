import { stack as Menu } from "react-burger-menu";
import HomeIcon from "@mui/icons-material/Home";
// import { HiOutlineLogout } from 'react-icons/hi'
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";

export default function BurgerMenu() {
  const showSettings = (e) => {
    e.preventDefault();
  };

  return (
    <Menu left width={220}>
      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <AccountBoxRoundedIcon />
          <a
            onClick={() => showSettings()}
            id="home"
            className="menu-item"
            href="/dashboard/Profile"
          >
            Profile
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <HomeIcon />
          <a
            onClick={() => showSettings()}
            id="about"
            className="menu-item"
            href="/about"
          >
            About
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <ExitToAppRoundedIcon />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex gap-3">
          <ExitToAppRoundedIcon />
        </div>
      </div>
    </Menu>
  );
}
