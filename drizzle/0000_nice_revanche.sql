CREATE TABLE "talent_subscribers" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"subscribed_at" timestamp DEFAULT now(),
	CONSTRAINT "talent_subscribers_email_unique" UNIQUE("email")
);
