module.exports = {
  siteMetadata: {
    title: `Matthew Kayode`,
    description: `Matthew Kayode| FullStack Developer`,
    keywords: `web developer, web designer, javascript, react, laravel`,
    siteUrl: `https://gatsby-starter-typescript-plus.netlify.com`,
    pathPrefix: `/my-portfolio`,
    author: {
      name: `Matthew Kayode`,
      url: `https://twitter.com/matthekayode19`,
      email: `matthewkayode116@gmail.com`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://gatsby-starter-typescript-plus.netlify.com`
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/assets/Logo.svg`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
}
