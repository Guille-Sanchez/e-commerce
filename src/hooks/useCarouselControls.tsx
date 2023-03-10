import { useReducer } from 'react'
import { sneakers, type sneakersType } from '../mockups/sneakers'

const initState = { currentPosition: 0 }

const REDUCER_ACTIONS = {
  type: 'REDUCER_ACTION_TYPE',
  prevImage: 'prevImage',
  nextImage: 'nextImage'
}

interface carouselControlsType {
  state: typeof initState
  dispatch: React.Dispatch<typeof REDUCER_ACTIONS>
  sneakers: sneakersType
}

export const useCarouselControls = (): carouselControlsType => {
  const [state, dispatch] = useReducer(reducer, initState)

  function reducer (state: typeof initState, action: typeof REDUCER_ACTIONS): any {
    const sneakersLength = sneakers.length
    switch (action.type) {
      case REDUCER_ACTIONS.nextImage:
        if (state.currentPosition === 0) {
          return ({ ...state, currentPosition: sneakersLength - 1 })
        } else {
          const prev: number = state.currentPosition
          return ({ ...state, currentPosition: prev - 1 })
        }

      case REDUCER_ACTIONS.prevImage:
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
