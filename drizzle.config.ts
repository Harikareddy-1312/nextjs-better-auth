import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",          // ✅ dialect instead of driver
  dbCredentials: {
    url: process.env.DATABASE_URL!, // ✅ url instead of connectionString
  },
} satisfies Config;
