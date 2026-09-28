import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "@/content/projects";

// Resets the scroll position when moving to another page.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />
      <header className="site-header">
        <div className="wrap">
          <Link to="/" className="site-home">
            HTMAA projects
          </Link>
          <nav aria-label="Projects">
            {projects.map((p) => (
              <Link key={p.path} to={p.path} aria-current={pathname === p.path ? "page" : undefined}>
                {p.shortTitle}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap">{children}</main>

      <footer className="site-footer">
        <div className="wrap">
          <p>Made by Maxime Vial, Paul Simonet and Alexandre Le Port at IFT, De Vinci Higher Education, 2025–26.</p>
          <p>Thanks to Louis Badr and Jonah Marrs for guiding us through the fabrication week.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
