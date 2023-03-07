import { Carousel } from './components/navbar/carousel/Carousel'
import { Navbar } from './components/navbar/Navbar'
import { ProductDescription } from './components/productDescription/ProductDescription'
import './e-commerce.css'

export const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Carousel />
        <ProductDescription />
      </main>

    </>
  )
}

export default App
