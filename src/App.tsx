import { useState } from 'react'
import { Carousel } from './components/carousel/Carousel'
import { Menu } from './components/menu/Menu'
import { Navbar } from './components/navbar/Navbar'
import { ProductDescription } from './components/productDescription/ProductDescription'
import { ItemsInCartProvider } from './context/ItemsInCart'

import './e-commerce.css'

export const App = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <ItemsInCartProvider>
      <Navbar setShowMenu={setShowMenu}/>
      {showMenu && <Menu setShowMenu={setShowMenu}/>}
      <main className='main'>
        <Carousel />
        <ProductDescription />
      </main>

    </ItemsInCartProvider>
  )
}

export default App
