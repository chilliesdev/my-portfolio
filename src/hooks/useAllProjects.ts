import { useStaticQuery, graphql } from 'gatsby'

export interface AllProjectsProps {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          id: number
          featured: boolean
          description: string
          image: string
          slug: string
          title: string
          tech: string
        }
      }
    }[]
  }
}

const useRelativePath = () => {
  const allProjects: AllProjectsProps = useStaticQuery(graphql`
    query allProjects {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
              featured
              description
              image
              slug
              title
              tech
            }
          }
        }
      }
    }
  `)

  return allProjects
}

export default useRelativePath
