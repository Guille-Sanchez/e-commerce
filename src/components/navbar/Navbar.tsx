import { useContext } from 'react'
import { iconCart, iconMenu, logo } from '../../assets/icons'
import { numberOfItemInCartContext } from '../../context/ItemsInCart'
import { Cart } from '../cart/Cart'
import { Menu } from '../menu/Menu'
import './navbar.css'

interface NavProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  showMenu: boolean
  showCart: boolean
}

export const Navbar = ({ setShowMenu, setShowCart, showMenu, showCart }: NavProps): JSX.Element => {
  const { numberOfItemInCart } = useContext(numberOfItemInCartContext)
  return (
    <>
      <div className='navbar'>
        <div className='left-wrapper'>
          <button
            className='menu-icon'
            onClick={() => { setShowMenu((prev) => !prev) } }>
            {iconMenu}
          </button>

          <div className='logo-icon'>
            {logo}
          </div>

          <Menu setShowMenu={setShowMenu} showMenu={showMenu}/>

        </div>

        <div className='right-wrapper'>
          <button onClick={() => { setShowCart((prev) => !prev) }} className='btn-icon-cart'>
            <div className='container'>
              {iconCart}

              {numberOfItemInCart > 0 &&
                <p className='cart-icon'>{numberOfItemInCart < 9 ? numberOfItemInCart : '+9'}</p>
              }
            </div>
          </button>

          <img src="/image-avatar.png" alt="" />

          <div className='nav-cart'>
            {showCart && <Cart/>}
          </div>
        </div>
      </div>

      <div className='hr-container'>
        <div className='nav-hr' />
      </div>
    </>
  )
}
