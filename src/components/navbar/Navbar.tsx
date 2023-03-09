import { useContext } from 'react'
import { iconCart, iconMenu, logo } from '../../assets/icons'
import { numberOfItemInCartContext } from '../../context/ItemsInCart'
import './navbar.css'

interface NavProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
}

export const Navbar = ({ setShowMenu, setShowCart }: NavProps): JSX.Element => {
  const { numberOfItemInCart } = useContext(numberOfItemInCartContext)
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
          <div className='container'>
            {iconCart}
            {numberOfItemInCart > 0 &&
              <p className='cart-icon'>{numberOfItemInCart < 9 ? numberOfItemInCart : '+9'}</p>
            }
          </div>
        </button>
        <img src="/image-avatar.png" alt="" />
      </div>
    </div>
  )
}
