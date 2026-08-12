const portrait = "/intasar-photo.png";
import { profile, stats, skillGroups } from "@/lib/portfolio-data";
import { Reveal } from "./primitives";

export function Hero() {
  return (
    <div id="top" className="hero-aura relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Open to internships
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-5xl leading-[1.02] font-bold sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Intasar</span>
              <br />
              Mostafiz
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
              {profile.meta}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                View projects
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-foreground">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="justify-self-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/15 blur-3xl" />
            <div className="float-slow relative overflow-hidden rounded-[2rem] border border-border bg-surface-2">
              <img
                src={portrait}
                alt="Portrait of Intasar Mostafiz"
                width={448}
                height={531}
                className="h-auto w-[280px] object-cover sm:w-[340px]"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-20 flex overflow-hidden border-y border-border/60 py-4">
        <div className="marquee-track flex shrink-0 gap-10 pr-10">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-10 pr-10" aria-hidden={dup === 1}>
              {skillGroups.flatMap((g) => g.items).map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
