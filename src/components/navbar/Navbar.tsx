import { iconCart, iconMenu, logo } from '../../assets/icons'
import './navbar.css'
export const Navbar = (): JSX.Element => {
  return (
    <div className='navbar'>
      <div className='left-wrapper'>
        <button className='menu-icon'>
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
