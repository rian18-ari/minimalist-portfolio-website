"use client"

import { useEffect, useRef, useState } from "react"
import { Monitor, Smartphone, Palette, Code } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "UX & UI",
    description: "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App",
    description: "Transforming ideas into exceptional web and mobile app experiences.",
  },
  {
    icon: Palette,
    title: "Design & Creative",
    description: "Crafting visually stunning designs that connect with your audience.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Bringing your vision to life with the latest technology and design trends.",
  },
]

export function SkillsSection() {
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

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className={`flex justify-center mb-16 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground border border-border">
            Services
          </span>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`text-center space-y-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 rounded-xl border border-border bg-background flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
