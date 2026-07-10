CREATE TABLE IF NOT EXISTS "public"."visitor_counter" (
    "id" integer NOT NULL DEFAULT 1,
    "count" bigint NOT NULL DEFAULT 0
);

ALTER TABLE "public"."visitor_counter" OWNER TO "postgres";

ALTER TABLE ONLY "public"."visitor_counter"
    ADD CONSTRAINT "visitor_counter_pkey" PRIMARY KEY ("id");

INSERT INTO "public"."visitor_counter" ("id", "count") VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

ALTER TABLE "public"."visitor_counter" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "select_visitor_counter" ON "public"."visitor_counter"
    FOR SELECT USING (true);

CREATE POLICY "increment_visitor_counter" ON "public"."visitor_counter"
    FOR UPDATE USING (true) WITH CHECK (true);

GRANT ALL ON TABLE "public"."visitor_counter" TO "anon";
GRANT ALL ON TABLE "public"."visitor_counter" TO "authenticated";
GRANT ALL ON TABLE "public"."visitor_counter" TO "service_role";

CREATE OR REPLACE FUNCTION "public"."increment_visitor"()
RETURNS void
LANGUAGE sql
AS $$
  UPDATE "public"."visitor_counter" SET "count" = "count" + 1 WHERE "id" = 1;
$$;

GRANT ALL ON FUNCTION "public"."increment_visitor"() TO "anon";
GRANT ALL ON FUNCTION "public"."increment_visitor"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."increment_visitor"() TO "service_role";
