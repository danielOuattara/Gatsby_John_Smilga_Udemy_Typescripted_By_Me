import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Title, SEO } from "../components";

//------------------------------------------------------

export const query = graphql`
  query About {
    strapiAboutMe {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;

type TypeAboutQuery = {
  strapiAboutMe: {
    title: string;
    info: string;
    stack: ReadonlyArray<{
      id: string;
      title: string;
    }>;
    image: {
      localFile: { publicURL: string };
    };
  };
};
//------------------------------------------------------
export default function About({ data }: PageProps<TypeAboutQuery>) {
  const aboutData = data.strapiAboutMe;

  return (
    <section className="about-page">
      <div className="section-center about-center">
        <img
          src={aboutData.image.localFile.publicURL}
          alt={aboutData.title}
          className="about-img"
        />
        <article className="about-text">
          <Title title={aboutData.title} />
          <p>{aboutData.info}</p>
          <div className="about-stack">
            {aboutData.stack.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

// export const Head = () => <Seo title={"About"} />;
