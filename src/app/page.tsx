"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("wisher");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // For now, just log the values
    console.log({ email, password, role });
    alert(`Logged in as ${role} (${email}) [demo only]`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <h1 className="text-4xl font-bold mb-4 text-purple-700">WishSponsor</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
        Connect those with dreams to those who can make them come true. Post your wishes, or become a sponsor and help fulfill someone's dream!
      </p>
      <nav className="flex flex-wrap gap-4 mb-12">
        <Link href="/feed" className="px-6 py-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">Wish Feed</Link>
        <Link href="/post" className="px-6 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">Post a Wish</Link>
        <Link href="/leaderboard" className="px-6 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600 transition">Leaderboard</Link>
        <Link href="/profile" className="px-6 py-2 rounded bg-gray-500 text-white font-semibold hover:bg-gray-600 transition">Profile</Link>
      </nav>
      <form onSubmit={handleLogin} className="bg-white rounded shadow p-6 w-full max-w-sm flex flex-col gap-4 mb-2">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 bg-white text-lg text-gray-900 placeholder-gray-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 bg-white text-lg text-gray-900 placeholder-gray-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <select
          className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 bg-white text-lg text-gray-900"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <option value="wisher">Wisher</option>
          <option value="sponsor">Sponsor</option>
        </select>
        <button
          type="submit"
          className="bg-purple-600 text-white rounded px-4 py-2 font-semibold hover:bg-purple-700 transition text-lg"
        >
          Login
        </button>
      </form>
      <div className="mb-8 text-center">
        <span className="text-gray-600">Don't have an account yet? </span>
        <Link href="/signup" className="text-blue-600 hover:underline font-semibold">Sign up</Link>
      </div>
      <div className="text-sm text-gray-500">&copy; {new Date().getFullYear()} WishSponsor. All rights reserved.</div>
    </div>
  );
}
