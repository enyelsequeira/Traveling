module.exports = {
  siteMetadata: {
    title: `Traveling around the World at an affordable price`,
    description: `This is a blog to showcase latest travel and we will be sharing our tips to make your travels easier`,
    author: `Enyel Sequeira`,
    siteUrl: "https://www.travelwithem.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `playfair display\:400,500,700,900`,
          `inter\:400,500,600,700,900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
