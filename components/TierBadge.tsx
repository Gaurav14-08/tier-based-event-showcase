export default function TierBadge({ tier }: { tier: string }) {
  const colors: Record<string, string> = {
    free: 'bg-gray-300 text-black',
    silver: 'bg-blue-400 text-white',
    gold: 'bg-yellow-400 text-white',
    platinum: 'bg-purple-500 text-white'
  };

  return (
    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${colors[tier] || 'bg-gray-400 text-black'}`}>
      {tier.toUpperCase()}
    </span>
  );
}
