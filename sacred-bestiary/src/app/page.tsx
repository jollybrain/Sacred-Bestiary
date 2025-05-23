import Image from 'next/image';

async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const json = await res.json();

  const detailedPokemonData = await Promise.all(
    json.results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    })
  );

  return detailedPokemonData;
}

export default async function HomePage() {
  const pokemons = await getPokemons();

  return (
    <main className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-black">
      {pokemons.map((pokemon: any) => (
        <div
          key={pokemon.id}
          className="border rounded-xl p-4 shadow-md text-center"
        >
          <h2 className="text-lg font-semibold capitalize">{pokemon.name}</h2>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={100}
            height={100}
            className="mx-auto"
          />
          <p color='black'>ID: {pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <div>
            <p>Types:</p>
            <ul>
              {pokemon.types.map((typeObj: any) => (
                <li key={typeObj.type.name}>{typeObj.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </main>
  );
}
