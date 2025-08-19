"use client";

import { authclient } from "@/lib/auth-client";

export default function LoginButton() {
  const handleGoogleLogin = async () => {
    try {
      await authclient.signIn({
        provider: "google",
      });
    } catch (err) {
      console.error("Google login failed:", err);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      Sign in with Google
    </button>
  );
}
