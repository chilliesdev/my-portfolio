import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  allFile: {
    edges: {
      node: {
        base: string
        publicURL: string
      }
    }[]
  }
}

const useRelativePath = (fileName: string) => {
  const allAssets: Props = useStaticQuery(graphql`
    query AllFiles {
      allFile {
        edges {
          node {
            base
            publicURL
          }
        }
      }
    }
  `)

  const Path: {
    node: {
      base: string
      publicURL: string
    }
  }[] = allAssets.allFile.edges.filter(({ node }) => node.base === fileName)

  return Path[0].node.publicURL || 'ERR:Image Not Found'
}

export default useRelativePath
