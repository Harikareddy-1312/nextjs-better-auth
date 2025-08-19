"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      await signIn.email({
        email,
        password,
        callbackURL: "/", 
      });
    } catch (err: any) {
      setError(err?.message ?? "Sign in failed");
    } finally {
      setPending(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: "4rem auto" }}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div style={{ display: "grid", gap: 12 }}>
          <input
            type="email"
            autoComplete="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="password"
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
