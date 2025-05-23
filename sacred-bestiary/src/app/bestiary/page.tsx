// src/app/bestiary/page.tsx
import Image from 'next/image';

type Pokemon = {
  name: string;
  url: string;
};

async function fetchPokemonList(): Promise<Pokemon[]> {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();
  return data.results;
}

export default async function BestiaryPage() {
  const pokemonList = await fetchPokemonList();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">The Sacred Bestiary</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemonList.map((pokemon, index) => {
          const id = index + 1;
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={pokemon.name}
              className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition"
            >
              <Image
                src={imageUrl}
                alt={pokemon.name}
                width={96}
                height={96}
                className="mx-auto"
              />
              <p className="capitalize font-medium mt-2">{pokemon.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
