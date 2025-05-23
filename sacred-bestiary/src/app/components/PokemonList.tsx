type Props = {
  grouped: {
    [key: string]: { id: number; name: string }[];
  };
};

export default function PokemonList({ grouped }: Props) {
  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([type, mons]) => (
        <div key={type}>
          <h2 className="text-xl font-semibold">{type}</h2>
          <ul className="pl-4 list-disc">
            {mons.map(mon => (
              <li key={mon.id}>{mon.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
