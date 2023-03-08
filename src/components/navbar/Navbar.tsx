import { iconCart, iconMenu, logo } from '../../assets/icons'
import './navbar.css'

interface setShowMenu { setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }

export const Navbar = ({ setShowMenu }: setShowMenu): JSX.Element => {
  return (
    <div className='navbar'>
      <div className='left-wrapper'>
        <button
          className='menu-icon'
          onClick={() => { setShowMenu((prev) => !prev) } }>
          {iconMenu}
        </button>
        {logo}
      </div>

      <div className='right-wrapper'>
        {iconCart}
        <img src="/image-avatar.png" alt="" />
      </div>
    </div>
  )
}
