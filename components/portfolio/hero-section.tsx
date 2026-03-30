"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                Selamat Datang
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Saya seorang
                <span className="text-primary"> Creative Developer</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Membangun pengalaman digital yang pixel-perfect dengan fokus pada desain yang bersih, 
                performa optimal, dan aksesibilitas yang inklusif.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToAbout}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Lihat Portfolio
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
                asChild
              >
                <a href="#contact">Hubungi Saya</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative bg-secondary rounded-2xl p-8 border border-border">
                <pre className="text-sm font-mono text-muted-foreground overflow-hidden">
                  <code>
{`const developer = {
  name: "Your Name",
  role: "Creative Developer",
  skills: [
    "React", "Next.js",
    "TypeScript", "Node.js"
  ],
  passion: "Building amazing
            web experiences"
};`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
