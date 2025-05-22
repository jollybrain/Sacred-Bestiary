"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pokemon } from "@/types/pokemon";
import { PokemonCard } from "./PokemonCard";

export function TypeTabs({ data }: { data: Record<string, Pokemon[]> }) {
  const types = Object.keys(data);

  return (
    <Tabs defaultValue={types[0]} className="w-full">
      <TabsList className="overflow-x-auto flex-wrap">
        {types.map(type => (
          <TabsTrigger key={type} value={type} className="capitalize">
            {type}
          </TabsTrigger>
        ))}
      </TabsList>

      {types.map(type => (
        <TabsContent value={type} key={type}>
          <div className="flex flex-wrap">
            {data[type].map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
