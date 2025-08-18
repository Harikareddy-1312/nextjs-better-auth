// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./schema";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg", schema }), // connect Drizzle + Postgres
  appName: "MyApp", // your app name
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!, // from Google Cloud Console
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [nextCookies()], // handles cookies/sessions for Next.js
});
