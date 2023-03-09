import { useReducer } from 'react'
import { sneakers, type sneakersType } from '../mockups/sneakers'

interface carouselControlsType {
  state: any
  dispatch: React.Dispatch<any>
  sneakers: sneakersType
}

export const useCarouselControls = (): carouselControlsType => {
  const [state, dispatch] = useReducer(reducer, { currentPosition: 0 })

  function reducer (state: any, action: any): any {
    const sneakersLength = sneakers.length
    switch (action.type) {
      case 'prevImage':
        if (state.currentPosition === 0) {
          return ({ ...state, currentPosition: sneakersLength - 1 })
        } else {
          const prev: number = state.currentPosition
          return ({ ...state, currentPosition: prev - 1 })
        }

      case 'nextImage':
        if (state.currentPosition === (sneakersLength - 1)) {
          return ({ ...state, currentPosition: 0 })
        } else {
          const prev: number = state.currentPosition
          return ({ ...state, currentPosition: prev + 1 })
        }
      default:
        console.log('Error')
        break
    }
  }

  return ({ state, dispatch, sneakers })
}
