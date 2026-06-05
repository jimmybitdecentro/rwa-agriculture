import { Link } from "@tanstack/react-router";
import { MapPin, Ruler, TrendingUp, Coins, ArrowRight, Sprout, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-radial-green overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Featured Agricultural Investment Projects
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-emerald-950 leading-tight">
            Invest in <span className="text-gradient-green">Georgia's Agricultural Future</span>
          </h2>
          <p className="mt-5 text-lg text-emerald-900/75">
            Own fractional shares of productive agricultural assets backed by real land, crops,
            tourism opportunities, and future processing industries through blockchain-powered
            tokenization.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-emerald-100 shadow-glow hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent" />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold text-white shadow-glow">
                      <TrendingUp className="h-3 w-3" /> {p.roi}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-emerald-800 backdrop-blur">
                      <Coins className="h-3 w-3" /> Tokenized RWA
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-extrabold leading-tight">{p.name}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs font-medium text-emerald-100/95">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.location}</span>
                      <span className="inline-flex items-center gap-1"><Ruler className="h-3.5 w-3.5" /> {p.acreage}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-emerald-900/70">{p.description}</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700/80">
                        Current Revenue
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.currentRevenue.map((r) => (
                          <span key={r} className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700/80">
                        Future Opportunities
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {p.futureRevenue.slice(0, 5).map((r) => (
                          <span key={r} className="rounded-full bg-white border border-emerald-200 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                            {r}
                          </span>
                        ))}
                        {p.futureRevenue.length > 5 && (
                          <span className="rounded-full bg-emerald-600/10 border border-emerald-200 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                            +{p.futureRevenue.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-50/70 border border-emerald-100 px-4 py-3">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700/70">Expected Appreciation</div>
                      <div className="text-sm font-bold text-emerald-900">{p.projectedGrowth}</div>
                    </div>
                    <Sprout className="h-5 w-5 text-emerald-600" />
                  </div>

                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-glow hover:bg-emerald-700 transition"
                  >
                    View Investment Opportunity <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
