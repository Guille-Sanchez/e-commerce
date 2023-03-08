import { useId } from 'react'
import { IconClose } from '../../assets/icons'
import './menu.css'

interface typeSetShowMenu { setShowMenu: React.Dispatch<React.SetStateAction<boolean>>}

export const Menu = ({ setShowMenu }: typeSetShowMenu): JSX.Element => {
  const menuOptions = ['Collections', 'Men', 'Women', 'About', 'Contact']
  const menuId = useId()

  return (
    <div className='wrapper-menu-nav'>
      <div className='menu-nav'>
        <button onClick={() => { setShowMenu((prev) => !prev) }}>
          {IconClose}
        </button>
        <ul>
          {
            menuOptions.map((item, index) => {
              return (
                <li key={`${index}-${menuId}`}><a href="#">{item}</a></li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
