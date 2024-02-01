import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Simple recipes`,
    description: `Nice and clean recipes site`,
    inspiredBy: `John Smilga`,
    author: {
      name: `daniel.ouattara`,
      place: `Combs la ville, France`,
    },
    simpleData: [`item 1`, `item 2`],
    complexData: [
      {
        id: 1,
        first_name: `Katlin`,
        last_name: `Sudy`,
        email: `ksudy0@github.io`,
        gender: `Genderqueer`,
        ip_address: `28.40.93.31`,
      },
      {
        id: 2,
        first_name: `Baryram`,
        last_name: `Rubinovitch`,
        email: `brubinovitch1@mapquest.com`,
        gender: `Male`,
        ip_address: `82.141.109.32`,
      },
      {
        id: 3,
        first_name: `Julius`,
        last_name: `Hue`,
        email: `jhue2@bandcamp.com`,
        gender: `Male`,
        ip_address: `145.143.44.46`,
      },
    ],
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
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `examples`, // The unique name for each instance
        path: `${__dirname}/src/examples-images`, // Path to the directory
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
