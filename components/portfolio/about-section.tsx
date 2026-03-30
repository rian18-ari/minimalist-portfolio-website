"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed text-balance transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Collaborate with brands and agencies
          <br />
          to create <span className="italic font-serif">impactful results.</span>
        </p>
      </div>
    </section>
  )
}
