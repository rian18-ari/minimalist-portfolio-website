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
  const profileImage = ""
  
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection profileImage={profileImage || undefined} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
