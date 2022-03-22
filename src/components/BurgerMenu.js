import { stack as Menu } from 'react-burger-menu'
import HomeIcon from '@mui/icons-material/Home'
import { FirebaseContext } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
// import { HiOutlineLogout } from 'react-icons/hi'
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'
import './index.css'

export default function BurgerMenu() {
  const showSettings = (e) => {
    e.preventDefault()
  }
  const navigate = useNavigate()
  const firebase = useContext(FirebaseContext)

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu right width={220}>
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
      {firebase.isLoggedIN() ? (
        <div className="flex items-center justify-center">
          <div className="flex gap-3">
            <ExitToAppRoundedIcon />
            <a
              onClick={async () => {
                await firebase.logout()
                navigate('/')
              }}
              id="Logout"
              className="menu-item"
              href="/"
            >
              Deconnexion
            </a>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex gap-3">
            <ExitToAppRoundedIcon />
            <a
              onClick={() => navigate('/login')}
              id="Login"
              className="menu-item"
              href="/login"
            >
              Connexion
            </a>
          </div>
        </div>
      )}
    </Menu>
  )
}
