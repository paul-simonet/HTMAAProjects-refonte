import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/content/projects";

export type Fact = { label: string; value: ReactNode };

export const Facts = ({ items }: { items: Fact[] }) => (
  <dl className="facts">
    {items.map((f) => (
      <div key={f.label}>
        <dt>{f.label}</dt>
        <dd>{f.value}</dd>
      </div>
    ))}
  </dl>
);

type HeadProps = { title: string; lede: ReactNode; facts: Fact[] };

export const ProjectHead = ({ title, lede, facts }: HeadProps) => (
  <>
    <Link to="/" className="back">
      All projects
    </Link>
    <header className="project-head">
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
      <Facts items={facts} />
    </header>
  </>
);

type SectionProps = { id?: string; title: string; children: ReactNode };

export const Section = ({ id, title, children }: SectionProps) => (
  <section className="section" id={id} aria-labelledby={id ? `${id}-title` : undefined}>
    <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
    {children}
  </section>
);

// Link to the project that comes after the current one, looping back to the first.
export const NextProject = ({ current }: { current: string }) => {
  const index = projects.findIndex((p) => p.path === current);
  const next = projects[(index + 1) % projects.length];
  return (
    <nav className="next-project" aria-label="Next project">
      <p>Next project</p>
      <Link to={next.path}>{next.title}</Link>
    </nav>
  );
};
