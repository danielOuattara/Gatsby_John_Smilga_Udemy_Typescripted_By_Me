import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

type TypeSeoQuery = {
  site: {
    siteMetadata: {
      defaultTitle: string;
      defaultDescription: string;
      inspiredBy: string;
      titleTemplate: string;
      siteUrl: string;
      defaultImage: string;
      linkedInUsername: string;
      twitterUsername: string;
      author: {
        name: string;
        place: string;
      };
    };
  };
};

export const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        inspiredBy
        titleTemplate
        siteUrl
        defaultImage: image
        linkedInUsername
        twitterUsername
        author {
          name
          place
        }
      }
    }
  }
`;

type TypeSeoProps = {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

export default function Seo({
  title,
  description,
  image,
  children,
}: TypeSeoProps) {
  const data: TypeSeoQuery = useStaticQuery(query);

  const { pathname } = useLocation();

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
    linkedInUsername,
    twitterUsername,
    author: { name, place },
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image} || ${defaultImage} `,
    url: `${siteUrl}${pathname || ``}`,
    linkedInUsername,
    twitterUsername,
    name,
    place,
  };

  return (
    <>
      <html lang="en-UK" />
      <title> {`${seo.title} | Recipes Site`}</title>
      {/* ok with linkedIn + facebook */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Simple Recipes" />
      {/* twitter specific */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@myawesomeblog" />
      <link
        rel="icon"
        // href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
        // href="mainImg.png"
      />
      {children}
    </>
  );
}
