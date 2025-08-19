"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Email/password login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, callbackUrl: "/websites" }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Login failed");

      setSuccess("Login successful! Redirecting…");
      setTimeout(() => {
        window.location.href = "/websites";
      }, 1000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  // Google login using popup
  const handleGoogleLogin = () => {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popup = window.open(
      `/api/auth/sign-in/social?provider=google&callbackUrl=${encodeURIComponent(
        "/websites"
      )}`,
      "Google Login",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const interval = setInterval(() => {
      if (!popup || popup.closed) {
        clearInterval(interval);
        window.location.reload();
      }
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mb-6 transition"
      >
        Sign in with Google
      </button>

      <form onSubmit={handleEmailLogin} className="space-y-4">
        <input
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition disabled:opacity-50"
        >
          {pending ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Signing in…
            </span>
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </div>
  );
}
