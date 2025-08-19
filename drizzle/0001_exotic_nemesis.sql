CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "account" CASCADE;--> statement-breakpoint
DROP TABLE "session" CASCADE;--> statement-breakpoint
DROP TABLE "user" CASCADE;--> statement-breakpoint
DROP TABLE "verification" CASCADE;