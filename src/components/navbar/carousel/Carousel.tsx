import { useId, useState } from 'react'
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

  const nextImage = (currentPosition: number): number => {
    const length = 4

    if (currentPosition === (length - 1)) {
      return (0)
    } else {
      return (currentPosition + 1)
    }
  }

  const prevImage = (currentPosition: number): number => {
    const length = 4
    if (currentPosition === 0) {
      return (length - 1)
    } else {
      return (currentPosition - 1)
    }
  }

  return (
    <div className='carousel'>
      {
        sneakers.map((sneaker, index) => {
          return (
            <img
              src={sneaker.src}
              alt={sneaker.alt}
              key={`${index}-${sneakersId}`}
              className={currentPosition === index ? 'show-card' : 'hide-card'}
            />
          )
        })
      }

      <button
        onClick={() => {
          setCurrentPosition(() => prevImage(currentPosition))
        }}
      >
        prev
      </button>

      <button
        onClick={() => {
          setCurrentPosition(() => nextImage(currentPosition))
        }}
      >
        Next
      </button>
    </div>
  )
}
