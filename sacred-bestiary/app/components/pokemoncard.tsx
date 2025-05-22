"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Pokemon } from "@/types/pokemon";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Card className="w-[200px] m-2">
      <CardContent className="p-4">
        <h2 className="font-bold capitalize">{pokemon.name}</h2>
        <p className="text-sm text-gray-500">
          Types: {pokemon.types.join(", ")}
        </p>
        <p className="text-sm text-gray-500">
          Abilities: {pokemon.abilities.join(", ")}
        </p>
      </CardContent>
    </Card>
  );
}
