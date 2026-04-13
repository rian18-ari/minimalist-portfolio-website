"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
// Import client supabase yang sudah kamu buat tadi
import { supabase } from "@/lib/supabase" 

// Sesuaikan interface dengan kolom di DB kamu
interface Project {
  id: number
  title: string
  slug: string
  description: string
  tech_stack: string // Karena di DB kamu tipe 'text'
  image_banner?: string 
  git_hub: string
  demo_url: string
  is_published: boolean
  category: string
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [isVisible, setIsVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  // 1. Fungsi Fetch Data dari Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('porto-project') // Nama tabel sesuai screenshot kamu
        .select('*')
        .eq('is_published', true) // Hanya ambil yang dipublish
        .order('id', { ascending: false })

      if (error) {
        console.error("Error fetching projects:", error)
      } else {
        setProjects(data || [])
      }
      setLoading(false)
    }

    fetchProjects()
  }, [])

  // 2. Observer untuk Animasi
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // 3. Logic Filter
  const categories = ["Semua", ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`mb-16 text-center transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground border border-border mb-8">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">
            Proyek <span className="italic font-serif">Terbaru</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center text-muted-foreground">Memuat project...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="h-48 bg-secondary relative overflow-hidden">
                  {project.image_banner ? (
                     <Image 
                        src={project.image_banner} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                     />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground italic">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack - Handling String to Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.split(',').map((tag) => (
                      <span
                        key={tag.trim()}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.git_hub && (
                      <a
                        href={project.git_hub}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}