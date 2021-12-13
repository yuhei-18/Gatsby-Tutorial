module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "GatsbyTutorial",
  },
  plugins: [
    "gatsby-plugin-root-import",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};
