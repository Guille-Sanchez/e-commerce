import { iconCart, iconMenu, logo } from '../../assets/icons'
import './navbar.css'

interface NavProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar = ({ setShowMenu, setShowCart }: NavProps): JSX.Element => {
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
        <button onClick={() => { setShowCart((prev) => !prev) }}>
          {iconCart}
        </button>
        <img src="/image-avatar.png" alt="" />
      </div>
    </div>
  )
}
