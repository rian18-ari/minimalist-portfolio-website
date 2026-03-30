import { User, MapPin, Calendar, Briefcase } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Tentang Saya
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mengenal Lebih Dekat
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Saya adalah seorang developer yang passionate dalam menciptakan pengalaman 
              web yang indah dan fungsional. Dengan fokus pada detail dan user experience, 
              saya berusaha menghadirkan solusi digital yang tidak hanya terlihat bagus 
              tetapi juga performant.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Perjalanan saya dimulai dari keingintahuan tentang bagaimana website bekerja. 
              Sekarang, saya telah mengembangkan berbagai proyek mulai dari landing page 
              sederhana hingga aplikasi web kompleks. Saya percaya bahwa kode yang baik 
              adalah kode yang bersih, teruji, dan mudah dipelihara.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Di waktu luang, saya senang mengeksplorasi teknologi baru, berkontribusi 
              ke proyek open source, dan berbagi pengetahuan dengan komunitas developer.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Nama</h3>
                <p className="text-muted-foreground text-sm">Your Name</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Lokasi</h3>
                <p className="text-muted-foreground text-sm">Indonesia</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Pengalaman</h3>
                <p className="text-muted-foreground text-sm">3+ Tahun</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Status</h3>
                <p className="text-muted-foreground text-sm">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
