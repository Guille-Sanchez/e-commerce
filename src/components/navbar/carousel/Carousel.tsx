import { useId, useState } from 'react'
import { iconNext, IconPrev } from '../../../assets/icons'
import { nextImage, prevImage } from '../../../logic/carouselButtons'
import './carousel.css'

export const Carousel = (): JSX.Element => {
  const sneakers = [{
    src: 'image-product-1.jpg',
    alt: 'Fall Limited Edition Sneakers'
  },
  {
    src: 'image-product-2.jpg',
    alt: 'Fall Limited Edition Sneakers'
  },
  {
    src: 'image-product-3.jpg',
    alt: 'Fall Limited Edition Sneakers'
  },
  {
    src: 'image-product-4.jpg',
    alt: 'Fall Limited Edition Sneakers'
  }] as const

  const sneakersId = useId()
  const [currentPosition, setCurrentPosition] = useState(0)
  const sneakersLength = sneakers.length
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
              className={currentPosition === index ? 'show-card' : 'hide-card'}
            />
          )
        })
      }

      <button
        className='btn-prev'
        onClick={() => {
          setCurrentPosition(() => prevImage({ currentPosition, sneakersLength }))
        }}
      >
        {IconPrev}
      </button>

      <button
        className='btn-next'
        onClick={() => {
          setCurrentPosition(() => nextImage({ currentPosition, sneakersLength }))
        }}
      >
        {iconNext}
      </button>
    </div>
  )
}
