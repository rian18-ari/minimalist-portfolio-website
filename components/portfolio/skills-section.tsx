"use client"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Docker", level: 65 },
      { name: "AWS", level: 60 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Keahlian
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Teknologi yang Saya Kuasai
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Proyek Selesai", value: "20+" },
            { label: "Klien Puas", value: "15+" },
            { label: "Tahun Pengalaman", value: "3+" },
            { label: "Kontribusi Open Source", value: "50+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-card border border-border rounded-xl"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
