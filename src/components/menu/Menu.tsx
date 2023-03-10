import { useId } from 'react'
import { IconClose } from '../../assets/icons'
import './menu.css'

interface typeSetShowMenu {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  showMenu: boolean
}

export const Menu = ({ setShowMenu, showMenu }: typeSetShowMenu): JSX.Element => {
  const menuOptions = ['Collections', 'Men', 'Women', 'About', 'Contact']
  const menuId = useId()

  return (
    <div className={showMenu ? 'wrapper-menu-nav' : 'hide-menu'}>
      <div className='menu-nav'>
        <button onClick={() => { setShowMenu((prev) => !prev) }}>
          <div className='icon-close'>{IconClose}</div>
        </button>
        <nav>
          <ul>
            {
              menuOptions.map((item, index) => {
                return (
                  <li key={`${index}-${menuId}`}><a href="#">{item}</a></li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  )
}
