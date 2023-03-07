import { type Card } from '../types.d'

export const nextImage = ({ currentPosition, sneakersLength }: Card): number => {
  if (currentPosition === (sneakersLength - 1)) {
    return (0)
  } else {
    return (currentPosition + 1)
  }
}

export const prevImage = ({ currentPosition, sneakersLength }: Card): number => {
  if (currentPosition === 0) {
    return (sneakersLength - 1)
  } else {
    return (currentPosition - 1)
  }
}
