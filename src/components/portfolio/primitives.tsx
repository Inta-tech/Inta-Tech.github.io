import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="font-mono text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-muted-foreground">{description}</p> : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 border-t border-border/60 py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}
