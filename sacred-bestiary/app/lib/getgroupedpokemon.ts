import { prisma } from "@/lib/prisma";

export async function getGroupedPokemon() {
  const all = await prisma.pokemon.findMany();

  const grouped: Record<string, typeof all> = {};

  all.forEach(p => {
    p.types.forEach(type => {
      if (!grouped[type]) grouped[type] = [];
      grouped[type].push(p);
    });
  });

  return grouped;
}
