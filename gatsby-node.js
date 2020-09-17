const path = require(`path`)

module.exports.createPages = async ({ actions }) => {
  // eslint-disable-next-line prettier/prettier
  import { projects } from "./src/data/index.ts"

  const { createPage } = actions
  const projectTemplate = path.resolve(`./src/templates/project.tsx`)
  // const data = path.resolve(`./src/data/index.ts`)
  console.log({ projects })
  // eslint-disable-next-line prettier/prettier
  projects.forEach((project) => {
    createPage({
      component: projectTemplate,
      path: `/${project.slug}`,
      context: {
        slug: project.slug
      }
    })
  })
}
