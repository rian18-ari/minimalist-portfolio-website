"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaHtml5, FaLaravel, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { SiAlpinedotjs, SiNextdotjs } from "react-icons/si";
import profileImage from "@/public/img/Gemini_Generated_Image_dihl3ldihl3ldihl.png"

interface HeroSectionProps {
  profileImage?: string
}

export function HeroSection({ profileImage }: HeroSectionProps) {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto w-full text-center space-y-8">
        {/* Profile Image */}
        <div className="flex justify-center animate-fade-in-up">
          <div className="relative">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-muted border-4 border-background shadow-lg">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  <span className="text-3xl font-semibold text-muted-foreground">YN</span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1 shadow-md">
              <span className="text-lg">👋</span>
            </div>
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-muted-foreground opacity-0 animate-fade-in animation-delay-300" style={{ animationFillMode: 'forwards' }}>
              Rian Fikri Hafiz
            </p>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4 pt-8 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight text-balance tracking-tight">
            Membangun{" "}
            <span className="italic font-serif">produk, brand,</span> dan{" "}
            <span className="italic font-serif">pengalaman.</span>
          </h1>
        </div>

        {/* CTA Button */}
        <div className="pt-4 opacity-0 animate-fade-in-up animation-delay-300" style={{ animationFillMode: 'forwards' }}>
          <Button
            onClick={scrollToProjects}
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 py-5 text-sm font-medium"
          >
            Paling Baru
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Client Logos */}
        <div className="pt-16 opacity-0 animate-fade-in animation-delay-400" style={{ animationFillMode: 'forwards' }}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-muted-foreground">
            <span className="text-6xl font-medium"><FaHtml5 className="text-foreground" /></span>
            <span className="text-6xl font-serif italic"><RiTailwindCssFill className="text-foreground" /></span>
            <span className="text-6xl font-semibold tracking-tight"><SiAlpinedotjs className="text-foreground" /></span>
            <span className="text-6xl font-bold tracking-widest"><FaLaravel className="text-foreground" /></span>
            <span className="text-6xl font-bold tracking-widest"><FaPhp className="text-foreground" /></span>
            <span className="text-6xl font-bold tracking-widest"><RiSupabaseFill className="text-foreground" /></span>
            <span className="text-6xl font-bold tracking-widest"><SiNextdotjs className="text-foreground" /></span>
          </div>
        </div>
      </div>
    </section>
  )
}
