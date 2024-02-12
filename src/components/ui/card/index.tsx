import { CardImage } from './card-image'
import { CardRoot } from './card-root'
import { TriggerMovie } from './trigger-movie'
import { TriggerSerie } from './trigger-serie'

export const Card = {
  Root: CardRoot,
  Image: CardImage,
  Trigger: {
    movie: TriggerMovie,
    serie: TriggerSerie,
  },
}
