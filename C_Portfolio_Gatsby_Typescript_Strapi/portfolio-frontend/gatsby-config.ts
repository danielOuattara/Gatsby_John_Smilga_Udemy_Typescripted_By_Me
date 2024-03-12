import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Fullstack Portfolio",
    description:
      "Portfolio website where I present myself and show my skills on different kind of projects and using a wide range of effective web design technologies. From the contact page, everybody can contact me",
    inspiredBy: `John Smilga`,
    author: {
      name: `daniel.ouattara`,
      place: `Combs la ville, France`,
    },
    siteUrl: "https://daniel-gatsby-ts-strapi-portfolio.netlify.app",
    image: "/home.png",
    linkedInUsername: "daniel-b-ouattara-677146ab",
    twitterUsername: "@danielOuattara",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["job", "project"],
        singleTypes: ["about-me"],
      },
    },
  ],
};

export default config;
