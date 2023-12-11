/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nick`,
    siteUrl: `https://nickneyland.com`,
    description: `Personal website of web developer and writer Nick Neyland.`
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "GA-G-KDZYEMHKNL",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
        options: {
          icon: `src/images/favicon.png`
      },
    },
    "gatsby-plugin-react-helmet", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};