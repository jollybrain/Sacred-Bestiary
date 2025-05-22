import { getGroupedPokemon } from "@/lib/getGroupedPokemon";
import { TypeTabs } from "@/components/TypeTabs";
import { fetchAndSavePokemon } from "@/app/actions/fetchAndSavePokemon";

export default async function Home() {
  await fetchAndSavePokemon();
  const grouped = await getGroupedPokemon();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">The Sacred Bestiary</h1>
      <TypeTabs data={grouped} />
    </main>
  );
}
