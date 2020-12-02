import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  allFile: {
    nodes: {
      base: string
      childImageSharp: {
        resolutions: {
          height: number
          width: number
        }
      } | null
    }[]
  }
}

const useImageResolution = (fileName: string) => {
  const allAssets: Props = useStaticQuery(graphql`
    query allImageResolutionQuery {
      allFile {
        nodes {
          base
          childImageSharp {
            resolutions {
              height
              width
            }
          }
        }
      }
    }
  `)

  const Path: {
    base: string
    childImageSharp: {
      resolutions: {
        height: number
        width: number
      }
    } | null
  }[] = allAssets.allFile.nodes.filter(({ base }) => base === fileName)

  return Path[0]?.childImageSharp.resolutions || 'ERR:Image Not Found'
}

export default useImageResolution
