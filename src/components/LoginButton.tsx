"use client";

export default function LoginButton() {
  return (
    <a
      href="/api/auth/signin/google"
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Sign in with Google
    </a>
  );
}