import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Simple recipes`,
    description: `Nice and clean recipes site. Website sharing Simple Recipes`,
    inspiredBy: `John Smilga`,
    author: {
      name: `daniel.ouattara`,
      place: `Combs la ville, France`,
    },
    titleTemplate: `%s | Recipes `,
    siteUrl: "https://daniel-gatsby-ts-simple-recipes.netlify.app/",
    image: "/mainImg.png",
    linkedInUsername: "daniel-b-ouattara-677146ab",
    twitterUsername: "@danielOuattara",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: {
    typesOutputPath: `src/project-queries-types.d.ts`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`, // The unique name for each instance
        path: `${__dirname}/src/assets/images`, // Path to the directory
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styling`, // The unique name for each instance
        path: `${__dirname}/src/assets/css`, // Path to the directory
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // Learn about environment variables: https://gatsby.dev/env-vars
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "500"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
  ],
};

export default config;
