"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"

const projectSchema = z.object({
  title: z.string().min(1, "Title wajib diisi"),
  slug: z.string().min(1, "Slug wajib diisi"),
  description: z.string().min(1, "Deskripsi wajib diisi"),
  category: z.string().min(1, "Category wajib diisi"),
  tech_stack: z.string().min(1, "Tech stack wajib diisi"),
  git_hub: z.string().optional(),
  demo_url: z.string().optional(),
  image_banner: z.string().optional(),
  is_published: z.boolean().default(true),
})

type FormData = z.infer<typeof projectSchema>

const fields: {
  name: keyof FormData
  label: string
  type: "text" | "textarea"
  placeholder?: string
}[] = [
  { name: "title", label: "Title", type: "text" },
  { name: "slug", label: "Slug", type: "text", placeholder: "contoh: my-awesome-project" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "category", label: "Category", type: "text", placeholder: "contoh: Web App" },
  { name: "tech_stack", label: "Tech Stack", type: "text", placeholder: "Next.js, Tailwind, Supabase" },
  { name: "git_hub", label: "GitHub URL", type: "text" },
  { name: "demo_url", label: "Demo URL", type: "text" },
  { name: "image_banner", label: "Image Banner URL", type: "text" },
]

export default function AddProjectPage() {
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null)

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: { is_published: true },
  })

  const onSubmit = async (data: FormData) => {
    setStatus(null)

    const payload = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, v === "" ? undefined : v])
    )

    try {
      const res = await fetch("/api/add-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-secret-key": process.env.NEXT_PUBLIC_BACKDOOR_SECRET ?? "",
        },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (!res.ok) {
        setStatus({ ok: false, message: result.error || "Gagal menyimpan" })
        return
      }

      setStatus({ ok: true, message: "Project berhasil ditambahkan!" })
      reset()
    } catch {
      setStatus({ ok: false, message: "Network error" })
    }
  }

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-xl mx-auto">
        <div className="mb-8">
          <Link
            href="/backdoor-180707"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-2 inline-block"
          >
            &larr; Kembali ke Dashboard
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Tambah Project</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {fields.map((f) => (
            <div key={f.name}>
              <label className="block text-sm font-medium text-zinc-300 mb-1.5">{f.label}</label>
              {f.type === "textarea" ? (
                <textarea
                  {...register(f.name)}
                  rows={5}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              ) : (
                <input
                  {...register(f.name)}
                  placeholder={f.placeholder}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              )}
              {errors[f.name] && (
                <p className="text-red-400 text-xs mt-1">{errors[f.name]?.message}</p>
              )}
            </div>
          ))}

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" {...register("is_published")} className="accent-zinc-500" />
            Published
          </label>

          {status && (
            <p className={`text-sm ${status.ok ? "text-green-400" : "text-red-400"}`}>
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-zinc-100 text-zinc-950 py-2.5 text-sm font-semibold hover:bg-zinc-300 disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? "Menyimpan..." : "Simpan"}
          </button>
        </form>
      </div>
    </div>
  )
}
