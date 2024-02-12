import { serieFactory } from '@/infra/factory/series.factory'

import { CastSlider } from './cast-slider'

type CastWrapperProps = {
  serieId: number
}

export const CastWrapper = async ({ serieId }: CastWrapperProps) => {
  const cast = await serieFactory().findCreditsBySerieId({
    id: serieId,
    token: process.env.API_BEARER_TOKEN!,
  })

  return <CastSlider cast={cast} serieId={serieId} />
}
