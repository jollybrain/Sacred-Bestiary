import { z } from 'zod';

export const pokemonSchema = z.object({
  id: z.number(),
  name: z.string(),
  types: z.array(
    z.object({
      type: z.object({
        name: z.string()
      })
    })
  )
});
