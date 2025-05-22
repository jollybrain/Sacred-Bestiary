import { z } from "zod";

export const PokemonSchema = z.object({
  name: z.string(),
  types: z.array(z.object({ type: z.object({ name: z.string() }) })),
  abilities: z.array(z.object({ ability: z.object({ name: z.string() }) })),
});

export type PokemonAPIData = z.infer<typeof PokemonSchema>;
