"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MessageCircle, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className={`flex justify-center mb-8 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="w-16 h-16 rounded-xl border border-border bg-background flex items-center justify-center">
            <Handshake className="h-8 w-8 text-foreground" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headline */}
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          Tell me about your next{" "}
          <span className="italic font-serif">project</span>
        </h2>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-500 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Button
            className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 py-5 text-sm font-medium"
            asChild
          >
            <a href="mailto:hello@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Email Me
            </a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-foreground/20 hover:bg-secondary px-6 py-5 text-sm font-medium"
            asChild
          >
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
