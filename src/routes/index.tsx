import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Hero } from "@/components/portfolio/hero";
import { Reveal, Section, SectionHeading } from "@/components/portfolio/primitives";
import {
  achievements,
  activities,
  education,
  profile,
  projects,
  references,
  skillGroups,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intasar Mostafiz — CSE Student & Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Intasar Mostafiz, Computer Science & Engineering student at BUP — Java, Python and React projects spanning AI, algorithms and robotics.",
      },
      { property: "og:title", content: "Intasar Mostafiz — CSE Student & Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects in AI fake news detection, graph algorithms, management systems and robotics. CGPA 3.85/4.00 at Bangladesh University of Professionals.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main>
      <SiteNav />
      <Hero />

      <Section id="about">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="About" title="Curious by default, methodical by habit." />
          <Reveal delay={100} className="space-y-5 text-muted-foreground">
            <p>
              I'm Intasar Mostafiz, a Computer Science &amp; Engineering undergraduate at
              Bangladesh University of Professionals, currently maintaining a CGPA of 3.85 out of
              4.00. I enjoy turning abstract ideas into working software — whether that's
              Dijkstra's algorithm powering a Dhaka City navigation system, a Turing machine
              simulator making automata theory click, or an NLP pipeline detecting fake news.
            </p>
            <p>
              My toolkit spans C, C++, Java, Python and JavaScript, with hands-on experience in
              React.js, Node.js, MySQL and Java Swing. I'm equally comfortable competing in
              inter-university programming contests, building robots with the BUP Robotics Club,
              and shipping full-stack projects from scratch.
            </p>
            <p>
              Right now, I'm focused on growing as a software engineer through real-world
              internships and collaborative projects. I learn fast, write clean code, and care about
              building things that actually work.
            </p>
            <ul className="grid gap-3 pt-2 font-mono text-sm">
              <li className="flex gap-3">
                <span className="text-primary">01</span> Based in Dhaka, Bangladesh
              </li>
              <li className="flex gap-3">
                <span className="text-primary">02</span> Graduating December 2027
              </li>
              <li className="flex gap-3">
                <span className="text-primary">03</span> Open to software engineering internships
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Languages, frameworks and platforms I use to design, build and ship."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="projects">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Seven projects across desktop applications, algorithms, embedded systems and machine learning."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 80}>
              <article className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                  {project.status ? (
                    <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {project.status}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border/70 pt-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-xs text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="education">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="relative border-l border-border pl-8">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 90}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.28rem] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {item.period}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-2 text-sm text-foreground/80">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="achievements">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitions, certifications & leadership"
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="card-lift rounded-2xl border border-border bg-card p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Co-curricular
            </h3>
            <div className="mt-6 space-y-4">
              {activities.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="card-lift rounded-2xl border border-border bg-surface p-6">
                    <h4 className="font-display text-base font-semibold">{item.title}</h4>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {item.period}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              References
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {references.map((ref) => (
                <Reveal key={ref.email}>
                  <div className="rounded-2xl border border-border p-5">
                    <p className="font-display text-sm font-semibold">{ref.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{ref.title}</p>
                    <p className="text-xs text-muted-foreground">{ref.org}</p>
                    <a
                      href={`mailto:${ref.email}`}
                      className="mt-3 inline-block break-all font-mono text-xs text-primary hover:underline"
                    >
                      {ref.email}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" className="hero-aura">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl font-bold sm:text-5xl">
            Let's build something <span className="text-gradient">worth shipping.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Available for software engineering internships and collaborative projects. The fastest
            way to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { label: "LinkedIn", value: "intasar-mostafiz", href: profile.linkedin },
              { label: "GitHub", value: "Inta-tech", href: profile.github },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="card-lift rounded-2xl border border-border bg-card p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
                  {item.label}
                </p>
                <p className="mt-3 break-words text-sm font-medium text-foreground">{item.value}</p>
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-10 text-sm text-muted-foreground">{profile.location}</p>
        </Reveal>
      </Section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6">
          <p className="truncate font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a
            href="#top"
            className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-primary hover:underline"
          >
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
