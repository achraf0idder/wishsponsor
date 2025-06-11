"use client";
import { useEffect, useState } from "react";

type Wish = {
  id: number;
  title: string;
  description: string;
  name?: string;
};

export default function WishFeed() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchWishes = () => {
    setLoading(true);
    fetch("/api/wishes")
      .then(res => res.json())
      .then(data => setWishes(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetch("/api/wishes")
      .then(res => res.json())
      .then(data => setWishes(data))
      .finally(() => setRefreshing(false));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Wish Feed</h1>
      <button
        onClick={handleRefresh}
        className="mb-6 px-4 py-2 bg-purple-600 text-white rounded font-semibold hover:bg-purple-700 transition disabled:opacity-60"
        disabled={refreshing}
      >
        {refreshing ? "Refreshing..." : "Refresh"}
      </button>
      {loading ? (
        <div className="text-gray-500">Loading wishes...</div>
      ) : wishes.length === 0 ? (
        <div className="text-gray-500">No wishes yet. Be the first to post one!</div>
      ) : (
        <ul className="w-full max-w-2xl flex flex-col gap-4">
          {wishes.map(wish => (
            <li key={wish.id} className="bg-white rounded shadow p-4">
              <div className="text-xl font-semibold text-purple-800 mb-1">{wish.title}</div>
              <div className="text-gray-700 mb-2">{wish.description}</div>
              {wish.name && <div className="text-sm text-gray-500">By: {wish.name}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 