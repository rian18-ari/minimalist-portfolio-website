"use client"

import { useEffect } from "react"

export function VisitorPing() {
  useEffect(() => {
    fetch("/api/visit", { method: "POST" }).catch(() => {})
  }, [])

  return null
}
