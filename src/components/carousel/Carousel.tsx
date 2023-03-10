import { useId } from 'react'
import { iconNext, IconPrev } from '../../assets/icons'
import { useCarouselControls, REDUCER_ACTIONS_TYPE } from '../../hooks/useCarouselControls'
// import { Cart } from '../cart/Cart'
import './carousel.css'

interface carouselPropType {
  showCart: boolean
}
export const Carousel = ({ showCart }: carouselPropType): JSX.Element => {
  const sneakersId = useId()
  const desktopSneakerId = useId()
  const { state, dispatch, sneakers } = useCarouselControls()

  return (
    <div className='carousel'>
      <>
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

      <div className='desktop-item-thumbnail'>
        <div>
          {
            sneakers.map((sneaker, index) => {
              return (
                <button key={`${index}-${desktopSneakerId}`}
                  onClick={() => {
                    dispatch({ type: REDUCER_ACTIONS_TYPE.newPosition, payload: index })
                  }}>
                  <div className={state.currentPosition === index ? 'container-selected' : ''}>

                    <img
                      className={state.currentPosition === index ? 'thumbnail-selected' : ''}
                      loading='lazy'
                      src={sneaker.src}
                      alt={sneaker.alt}
                    />
                  </div>
                </button>
              )
            })
          }
        </div>
      </div>
      </>

      <button className='btn-prev'
        onClick={() => {
          dispatch({ type: REDUCER_ACTIONS_TYPE.prevImage })
        }}
      >
        {IconPrev}
      </button>

      <button
        className='btn-next'
        onClick={() => {
          dispatch({ type: REDUCER_ACTIONS_TYPE.nextImage })
        }}
      >
        {iconNext}
      </button>
      {/* showCart && <Cart /> */}
    </div>
  )
}
