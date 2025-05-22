"use server";

import { PokemonSchema } from "@/validation/pokemonSchema";
import { prisma } from "@/lib/prisma";
import axios from "axios";

export async function fetchAndSavePokemon() {
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  const results = res.data.results;

  for (const item of results) {
    const details = await axios.get(item.url);
    const parsed = PokemonSchema.safeParse(details.data);
    if (parsed.success) {
      const { name, types, abilities } = parsed.data;

      await prisma.pokemon.upsert({
        where: { name },
        update: {},
        create: {
          name,
          types: types.map(t => t.type.name),
          abilities: abilities.map(a => a.ability.name),
        },
      });
    }
  }

  return { success: true };
}
