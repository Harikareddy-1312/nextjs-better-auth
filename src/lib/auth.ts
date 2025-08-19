import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import * as authSchema from "@/lib/schema"; 

export const auth = betterAuth({
  basePath: "/api/auth",

  emailAndPassword: {
    enabled: true,
  },

  social: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),

  plugins: [nextCookies()],
});
