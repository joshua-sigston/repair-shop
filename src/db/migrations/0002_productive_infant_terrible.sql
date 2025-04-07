ALTER TABLE "customers" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "customers" DROP COLUMN "ceated_at";