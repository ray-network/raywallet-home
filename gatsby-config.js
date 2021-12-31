module.exports = {
  siteMetadata: {
    siteUrl: "https://raywallet.io",
    title: "RayWallet - Cardano ADA Light Wallet with DeFi features",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RayWallet - Cardano ADA Light Wallet with DeFi features`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": require("path").resolve(__dirname, "src"),
        },
        extensions: ["js", "scss", "sass"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41062113-28",
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: "86949812",
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.*\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        "data-theme": "default",
      },
    },
  ],
}
