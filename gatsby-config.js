/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/translations`,
        languages: [`en`, `ru`, `be`],
        defaultLanguage: `ru`,
        redirect: true,
      },
    },
  ]
}
