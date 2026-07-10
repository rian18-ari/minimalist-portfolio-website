import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST() {
  const { error } = await supabase.rpc("increment_visitor")

  if (!error) {
    return NextResponse.json({ ok: true })
  }

  const { data, error: selectError } = await supabase
    .from("visitor_counter")
    .select("count")
    .eq("id", 1)
    .single()

  if (selectError || !data) {
    const { error: insertError } = await supabase
      .from("visitor_counter")
      .insert({ id: 1, count: 1 })

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  }

  const { error: updateError } = await supabase
    .from("visitor_counter")
    .update({ count: (data.count ?? 0) + 1 })
    .eq("id", 1)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
