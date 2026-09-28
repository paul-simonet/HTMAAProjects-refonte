import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { Facts } from "@/components/site/Parts";
import { projects } from "@/content/projects";

const Index = () => (
  <Layout>
    <section className="home-intro">
      <h1 className="display">How to Make (Almost) Anything</h1>
      <p>
        Three projects from the HTMAA course at IFT, built by a team of three: a mechanical toy, a piece of
        video hardware and a small machine-learning game. Each page explains what we set out to do, how we built
        it and what went wrong along the way.
      </p>
    </section>

    <ul className="project-list">
      {projects.map((p) => (
        <li key={p.path} className="project-row">
          <Link to={p.path} tabIndex={-1} aria-hidden="true">
            <img src={p.image} alt="" style={{ objectPosition: p.imagePosition }} />
          </Link>
          <div>
            <h2>
              <Link to={p.path}>{p.title}</Link>
            </h2>
            <p>{p.summary}</p>
            <Facts items={[{ label: "Tools", value: p.tools }]} />
            <Link to={p.path} className="more">
              Read the project
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Index;
