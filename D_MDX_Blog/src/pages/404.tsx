import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="error-page">
        <div className="page-center">
          <span>404</span>
          <h4>Page cannot be found</h4>
          <p style={paragraphStyles}>
            Sorry 😔, we couldn’t find what you were looking for.
            <br />
            {process.env.NODE_ENV === "development" ? (
              <>
                <br />
                Try creating a page in{" "}
                <code style={codeStyles}>src/pages/</code>.
                <br />
              </>
            ) : null}
            <br />
          </p>
          <Link to="/" className="btn">
            Back to home
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Not found</title>;

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
