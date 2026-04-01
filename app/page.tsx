import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  // Ganti dengan URL foto profil Anda
  // Contoh: "/images/profile.jpg" atau bisa juga URL eksternal
  const profileImage = "/img/Gemini_Generated_Image_dihl3ldihl3ldihl.png"
  const projectsatu = "/img/project-1.png"
  const projectdua = "/img/project-2.png"
  const projecttiga = "/img/project-3.png"
  
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection profileImage={profileImage || undefined} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projectsatu={projectsatu || undefined} projectdua={projectdua || undefined} projecttiga={projecttiga || undefined} />
      <ContactSection />
      <Footer />
    </main>
  )
}
