import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import { authSchema } from "./schema";

export const auth = betterAuth({
  basePath: "/api/auth",
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",   // or sqlite if you use sqlite
    schema: authSchema,
  }),
});
