import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { Layout, Seo } from "./../components";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Seo>
      <Layout>
        <main style={pageStyles} className="error-page">
          <section>
            <h1>404</h1>
            <h2> Page Not Found</h2>
          </section>
          <p style={paragraphStyles}>
            Sorry 😔, we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === "development" ? (
              <code>
                <br />
                Try creating a page in{" "}
                <code style={codeStyles}>src/pages/</code>.
                <br />
              </code>
            ) : null}
            <br />
            <Link to="/">Go home</Link>.
          </p>
        </main>
      </Layout>
    </Seo>
  );
};

export default NotFoundPage;

export function Head() {
  return <Seo title="Not Found" />;
}
