"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "Web App",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur drag-and-drop, kolaborasi tim, dan notifikasi real-time.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Website portfolio personal dengan desain minimalis, animasi halus, dan performa optimal.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "Website",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Platform blog dengan CMS headless, SEO optimization, dan sistem komentar interaktif.",
    tags: ["Next.js", "Sanity", "TypeScript"],
    category: "Website",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["Semua", "Web App", "Full Stack", "Website"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 text-center transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground border border-border mb-8">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8">
            Proyek <span className="italic font-serif">Terbaru</span>
          </h2>

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

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-secondary flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-bold text-foreground">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
