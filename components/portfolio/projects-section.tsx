"use client"

import { useState } from "react"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk yang lengkap.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    category: "Web App",
    demoUrl: "#",
    githubUrl: "#",
    color: "from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas dengan fitur drag-and-drop, kolaborasi tim, dan notifikasi real-time.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    demoUrl: "#",
    githubUrl: "#",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan desain minimalis, animasi halus, dan performa optimal.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "Website",
    demoUrl: "#",
    githubUrl: "#",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "Platform blog dengan CMS headless, SEO optimization, dan sistem komentar interaktif.",
    tags: ["Next.js", "Sanity", "TypeScript"],
    category: "Website",
    demoUrl: "#",
    githubUrl: "#",
    color: "from-orange-500/20 to-orange-500/5",
  },
]

const categories = ["Semua", "Web App", "Full Stack", "Website"]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Semua")

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Proyek Terbaru
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
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
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="group">
            Lihat Semua Proyek
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
