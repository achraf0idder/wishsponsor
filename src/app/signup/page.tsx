"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("wisher");
  const [error, setError] = useState("");

  function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    // For now, just show an alert
    alert(`Signed up as ${role} (${email}) [demo only]`);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-8">
      <h1 className="text-3xl font-bold mb-4 text-purple-700">Sign Up</h1>
      <form onSubmit={handleSignup} className="bg-white rounded shadow p-6 w-full max-w-sm flex flex-col gap-4 mb-2">
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded px-3 py-2 bg-white text-lg text-gray-900 placeholder-gray-400"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
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
          Sign Up
        </button>
        {error && <div className="text-red-600 text-center">{error}</div>}
      </form>
      <div className="mb-8 text-center">
        <span className="text-gray-600">Already have an account? </span>
        <Link href="/" className="text-blue-600 hover:underline font-semibold">Login</Link>
      </div>
    </div>
  );
} 