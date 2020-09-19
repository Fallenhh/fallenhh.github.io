/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Atelier Fallenhh`,
    description: `Fallenhh's personal Blog, hopes & dreams`,
    author: `Fallenhh`,
    keywords: [`blog`],
    siteUrl: `https://www.fallen.moe`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              aliases: {},
              showLineNumbers: false,
            },
          },

          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          }
        ],
      },
     
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   postCssPlugins: [
      //     require("tailwindcss"),
      //     require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
      //   ],
      // },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163679525-1",
        head: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: false,
      },
    },
  ],
}