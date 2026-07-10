"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default function DashboardPage() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [dbStatus, setDbStatus] = useState<"checking" | "connected" | "error">("checking")

  useEffect(() => {
    supabase
      .from("visitor_counter")
      .select("count")
      .eq("id", 1)
      .single()
      .then(({ data, error }) => {
        if (error) {
          setDbStatus("error")
        } else {
          setVisitorCount(data?.count ?? 0)
          setDbStatus("connected")
        }
      })
  }, [])

  return (
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-lg mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-zinc-500 mt-1">Backdoor — tidak terlihat dari publik</p>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">Koneksi Supabase</span>
            <span className={`text-sm font-semibold ${
              dbStatus === "connected" ? "text-green-400" : dbStatus === "error" ? "text-red-400" : "text-zinc-500"
            }`}>
              {dbStatus === "checking" ? "..." : dbStatus === "connected" ? "Terhubung" : "Gagal"}
            </span>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-300">Total Pengunjung</span>
            <span className="text-2xl font-bold text-zinc-100 tabular-nums">
              {visitorCount !== null ? visitorCount.toLocaleString("id-ID") : "..."}
            </span>
          </div>
        </div>

        <Link
          href="/backdoor-180707/add"
          className="block w-full rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50 py-4 text-center text-sm text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors"
        >
          + Tambah Project Baru
        </Link>
      </div>
    </div>
  )
}
