import { useId } from 'react'
import { iconNext, IconPrev } from '../../assets/icons'
import { useCarouselControls } from '../../hooks/useCarouselControls'
import { Cart } from '../cart/Cart'
import './carousel.css'

interface carouselPropType {
  showCart: boolean
}
export const Carousel = ({ showCart }: carouselPropType): JSX.Element => {
  const sneakersId = useId()
  const { state, dispatch, sneakers } = useCarouselControls()

  return (
    <div className='carousel'>
      {
        sneakers.map((sneaker, index) => {
          return (
            <img
              loading='lazy'
              src={sneaker.src}
              alt={sneaker.alt}
              key={`${index}-${sneakersId}`}
              className={state.currentPosition === index ? 'show-card' : 'hide-card'}
            />
          )
        })
      }

      <button className='btn-prev'
        onClick={() => {
          dispatch({ type: 'prevImage' })
        }}
      >
        {IconPrev}
      </button>

      <button
        className='btn-next'
        onClick={() => {
          dispatch({ type: 'nextImage' })
        }}
      >
        {iconNext}
      </button>
      {showCart && <Cart />}
    </div>
  )
}
