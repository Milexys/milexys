module.exports = {
  siteMetadata: {
    title: `Juntos más alto`,
    description: `Haz tu aporte.`,
    author: `@masaltonews`,
    url: `https://juntosmasalto.cl`,
    domain: `https://juntosmasalto.cl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: [`src/styles/globals.css`],
        // develop: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-167536891-1`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Llegar más alto`,
        short_name: `llegarmasalto`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
