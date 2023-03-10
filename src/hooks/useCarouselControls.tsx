import { useReducer } from 'react'
import { sneakers, type sneakersType } from '../mockups/sneakers'

const initState = { currentPosition: 0 }

export const enum REDUCER_ACTIONS_TYPE {
  'REDUCER_ACTION_TYPE',
  'prevImage',
  'nextImage',
  'position',
  'newPosition'
}

interface ReducerAction {
  type: REDUCER_ACTIONS_TYPE
  payload?: number
}

interface carouselControlsType {
  state: typeof initState
  dispatch: React.Dispatch<ReducerAction>
  sneakers: sneakersType
}

export const useCarouselControls = (): carouselControlsType => {
  const [state, dispatch] = useReducer(reducer, initState)

  function reducer (state: typeof initState, action: ReducerAction): any {
    const sneakersLength = sneakers.length
    switch (action.type) {
      case REDUCER_ACTIONS_TYPE.nextImage:
        if (state.currentPosition === 0) {
          return ({ ...state, currentPosition: sneakersLength - 1 })
        } else {
          const prev: number = state.currentPosition
          return ({ ...state, currentPosition: prev - 1 })
        }

      case REDUCER_ACTIONS_TYPE.prevImage:
        if (state.currentPosition === (sneakersLength - 1)) {
          return ({ ...state, currentPosition: 0 })
        } else {
          const prev: number = state.currentPosition
          return ({ ...state, currentPosition: prev + 1 })
        }

      case REDUCER_ACTIONS_TYPE.newPosition:
        return ({ ...state, currentPosition: action.payload })

      default:
        console.log('Error')
        break
    }
  }

  return ({ state, dispatch, sneakers })
}
