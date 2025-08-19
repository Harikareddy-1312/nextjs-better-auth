"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/sign-in/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          callbackUrl: "/",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.message || "Login failed");
      }

      const redirectUrl = (await res.json())?.url || "/";
      window.location.href = redirectUrl;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };
  const handleGoogleLogin = () => {
    const callbackUrl = "/";
    window.location.href = `/api/auth/sign-in/social?provider=google&callbackUrl=${encodeURIComponent(callbackUrl)}`;
  };

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto" }}>
      <h1>Login</h1>

      <button
        style={{ marginBottom: 16, width: "100%" }}
        onClick={handleGoogleLogin}
      >
        Sign in
      </button>

      <form onSubmit={handleEmailLogin}>
        <div style={{ display: "grid", gap: 12 }}>
          <input
            type="email"
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={pending}>
            {pending ? "Signing in…" : "Sign in"}
          </button>
          {error && <p style={{ color: "crimson" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
}
