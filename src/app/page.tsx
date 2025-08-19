"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // For redirecting

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple front-end validation
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // Demo login success
    router.push("/websites"); // Redirect to websites page
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign in
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
}
