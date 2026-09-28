import { Link } from "react-router-dom";
import Layout from "@/components/site/Layout";

const NotFound = () => (
  <Layout>
    <section className="not-found">
      <h1 className="display">Page not found</h1>
      <p className="lede">
        This address doesn't match any page. <Link to="/">Go to the list of projects</Link>.
      </p>
    </section>
  </Layout>
);

export default NotFound;
