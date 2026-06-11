import { supabase } from "@/lib/supabase"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface Project {
  id: number
  title: string
  slug: string
  description: string
  tech_stack: string
  image_banner?: string
  git_hub: string
  demo_url: string
  is_published: boolean
  category: string
}

async function getProject(slug: string) {
  const { data, error } = await supabase
    .from('porto-project')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) return null
  return data as Project
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slug = params.slug
  const project = await getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Kembali ke Portofolio
        </Link>

        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full border border-border uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              {project.title}
            </h1>
          </div>

          {/* Banner Image */}
          <div className="aspect-video relative rounded-3xl overflow-hidden bg-secondary border border-border shadow-2xl shadow-foreground/5">
            {project.image_banner ? (
              <Image 
                src={project.image_banner} 
                alt={project.title} 
                fill 
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground italic text-lg">
                Tidak Ada Gambar
              </div>
            )}
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-3 gap-12 pt-8">
            <div className="md:col-span-2 space-y-10">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 inline-block">
                  Tentang Proyek
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
                  {project.description}
                </p>
              </section>
            </div>

            <div className="space-y-10">
              {/* Stack */}
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground uppercase tracking-widest text-xs opacity-50">
                  Stack & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack?.split(',').map((tech) => (
                    <span 
                      key={tech.trim()}
                      className="px-3 py-1.5 bg-secondary text-foreground rounded-lg text-sm font-medium border border-border hover:border-foreground/20 transition-colors"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              <section className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground uppercase tracking-widest text-xs opacity-50">
                  Tautan Proyek
                </h3>
                <div className="flex flex-col gap-3">
                  {project.demo_url ? (
                    <a 
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all group"
                    >
                      <span className="font-semibold">Demo Langsung</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 text-muted-foreground border border-dashed border-border cursor-not-allowed">
                      <ExternalLink className="h-4 w-4 opacity-30" />
                      <span className="text-sm font-medium italic">Tidak ada link publikasi</span>
                    </div>
                  )}

                  {project.git_hub && (
                    <a 
                      href={project.git_hub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-secondary transition-all group"
                    >
                      <span className="font-medium text-foreground">Sumber Kode</span>
                      <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
