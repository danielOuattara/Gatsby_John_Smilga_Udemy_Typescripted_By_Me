import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

export const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        inspiredBy
        titleTemplate
        siteUrl
        image
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

type TypeSEOQuery = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      inspiredBy: string;
      titleTemplate: string;
      siteUrl: string;
      image: string;
      linkedInUsername: string;
      twitterUsername: string;
      author: {
        name: string;
        place: string;
      };
    };
  };
};

type TypeSEOProps = {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

export default function SEO({
  title,
  description,
  image,
  children,
}: TypeSEOProps) {
  const data: TypeSEOQuery = useStaticQuery(query);

  const { pathname } = useLocation();

  // data from siteMetadata query
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
    linkedInUsername,
    twitterUsername,
    author: { name, place },
  } = data.site.siteMetadata;

  // 'seo' object build using data from SEO props data OR from siteMetadata query
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image} ` : `${siteUrl}${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    linkedInUsername,
    twitterUsername,
    name,
    place,
  };

  console.log("seo = ", seo);

  return (
    <>
      <html lang="en-UK" />
      <title id="title"> {`${seo.title} | Portfolio FullStack Dev`}</title>
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
