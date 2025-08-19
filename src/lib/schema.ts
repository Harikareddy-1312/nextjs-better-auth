import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Accounts table
export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  provider: varchar("provider", { length: 255 }).notNull(),
  providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
  refreshToken: text("refresh_token"),
  accessToken: text("access_token"),
  expiresAt: timestamp("expires_at"),
});

// Sessions table
export const sessions = pgTable("sessions", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  expires: timestamp("expires").notNull(),
  sessionToken: varchar("session_token", { length: 255 }).notNull(),
});

// Verification table
export const verification = pgTable("verification", {
  id: serial("id").primaryKey(),
  identifier: varchar("identifier", { length: 255 }).notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  expires: timestamp("expires").notNull(),
});

// Export schema
export const authSchema = {
  users,
  accounts,
  sessions,
  verification,
};
