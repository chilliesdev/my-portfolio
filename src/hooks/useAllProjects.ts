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

const useRelativePath = (id?: number | number[]) => {
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

  const projectNode = (singleId: number) => allProjects.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.id === singleId)

  const projectsFromSingleId = (singleId: number) => {
    const result = projectNode(singleId)

    return {
      allMarkdownRemark: {
        edges: result
      }
    }
  }

  const projectsFromMultipleId = (multipleId: number[]) => {
    return {
      allMarkdownRemark: {
        edges: multipleId.map(singeleId => {
          const data = projectNode(singeleId)
          return data[0]
        })
      }
    }
  }

  // eslint-disable-next-line no-nested-ternary
  return typeof id === 'number' ? projectsFromSingleId(id) : Array.isArray(id) ? projectsFromMultipleId(id) : allProjects
}

export default useRelativePath
