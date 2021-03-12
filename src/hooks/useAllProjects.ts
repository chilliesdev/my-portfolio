import { useStaticQuery, graphql } from 'gatsby'

export interface AllProjectsProps {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          id: number
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

const useAllProjects = (id?: number | number[]) => {
  const allProjects: AllProjectsProps = useStaticQuery(graphql`
    query allProjects {
      allMarkdownRemark(sort: { fields: frontmatter___title }) {
        edges {
          node {
            frontmatter {
              id
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

export default useAllProjects
