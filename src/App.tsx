import { useState } from 'react'
import { Carousel } from './components/carousel/Carousel'
import { Navbar } from './components/navbar/Navbar'
import { ProductDescription } from './components/productDescription/ProductDescription'
import { ItemsInCartProvider } from './context/ItemsInCart'
import './e-commerce.css'

export const App = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  return (
    <ItemsInCartProvider>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} setShowCart={setShowCart} showCart={showCart} />
      <main className='main'>
        <Carousel showCart={showCart}/>
        <ProductDescription />
      </main>

    </ItemsInCartProvider>
  )
}

export default App
