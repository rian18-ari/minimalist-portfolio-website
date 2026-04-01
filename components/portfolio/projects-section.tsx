"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectsSectionProps {
  projectsatu?: string
  projectdua?: string
  projecttiga?: string
}

const projects = [
  {
    id: 1,
    title: "Mutabaah Thafidz Santri",
    image: "/img/project-2.png",
    description: "Aplikasi untuk mempermudah pencatatan hafalan Al-Qur'an santri.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "Web App",
    demoUrl: "https://santri-wayfinder.lovable.app/",
  },
  {
    id: 2,
    title: "spendly",
    image: "/img/project-3.png",
    description: "Aplikasi manajemen keuangan untuk mempermudah pencatatan pengeluaran dan catatan keuangan penugasan karyawan.",
    tags: ["Laravel 12", "PHP", "MySQL", "Tailwind CSS", "Alpine.js", "Livewire"],
    category: "Full Stack",
    demoUrl: "https://www.spend.my.id/",
  },
  {
    id: 3,
    title: "Toko Robotik",
    image: "/img/project-1.png",
    description: "Website toko online untuk menjual produk robotik.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    category: "Website",
    demoUrl: "http://tokorobotik.rianfikri.my.id/",
  },
]

const categories = ["Semua", "Web App", "Full Stack", "Website"]

export function ProjectsSection({projectsatu, projectdua, projecttiga}: ProjectsSectionProps) {
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
                <Image src={project.image} alt={project.title.charAt(0)} width={20} height={20} className="w-full h-full object-cover" />
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
