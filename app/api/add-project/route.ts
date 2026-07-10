import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

const SECRET = process.env.BACKDOOR_SECRET

const requiredFields = ["title", "slug", "description", "tech_stack", "category"] as const

export async function POST(request: Request) {
  const secret = request.headers.get("x-secret-key")
  if (SECRET && secret !== SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  for (const field of requiredFields) {
    if (!body[field] || typeof body[field] !== "string" || !body[field].trim()) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  const { data, error } = await supabase
    .from("porto-project")
    .insert([{
      title: body.title,
      slug: body.slug,
      description: body.description,
      tech_stack: body.tech_stack,
      category: body.category,
      git_hub: body.git_hub || null,
      demo_url: body.demo_url || null,
      image_banner: body.image_banner || null,
      is_published: body.is_published ?? true,
    }])
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ data }, { status: 201 })
}
