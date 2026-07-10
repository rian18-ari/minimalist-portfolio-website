import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST() {
  const { error } = await supabase.rpc("increment_visitor")

  if (error) {
    const { error: updateError } = await supabase
      .from("visitor_counter")
      .update({ count: 1 })
      .eq("id", 1)

    if (updateError) {
      const { error: insertError } = await supabase
        .from("visitor_counter")
        .insert({ id: 1, count: 1 })

      if (insertError) {
        return NextResponse.json({ error: insertError.message }, { status: 500 })
      }
    }
  }

  return NextResponse.json({ ok: true })
}
