import { Carousel } from './components/navbar/carousel/Carousel'
import { Navbar } from './components/navbar/Navbar'
import './e-commerce.css'

export const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Carousel />

      </main>

    </>
  )
}

export default App
