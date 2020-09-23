import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

import { projects } from '../data'

interface BackgroundProps {
  allFile: {
    edges: {
      node: {
        base: string
        publicURL: string
      }
    }[]
  }
}
const IndexPage = () => {
  const allAssets: BackgroundProps = useStaticQuery(graphql`
    query HomeBackground {
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

  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const maxFeature: number = projects.length

  const nextFeature = () => {
    return setCurrentFeature(prevState => (prevState === maxFeature ? 0 : prevState + 1))
  }

  const opennedFeature = (id: number) => id === currentFeature && true

  const checkLastFeature = (id: number) => id === maxFeature && true
  return (
    <IndexLayout>
      <Page>
        <Featured onNext={nextFeature} open={opennedFeature(0)} />
        {projects.map(({ id, name, description, featured, image }) => {
          const backgroundPath: {
            node: {
              base: string
              publicURL: string
            }
          }[] = allAssets.allFile.edges.filter(({ node }) => node.base === image)

          // console.log({ projectOneBackground, backgroundPath, image })
          return (
            featured && (
              <Featured
                key={id}
                onNext={nextFeature}
                open={opennedFeature(id)}
                details={{
                  heading: name,
                  body: description,
                  image: backgroundPath[0].node.publicURL,
                  arrowBtn: checkLastFeature(id) ? 'go to home' : 'next featured project',
                  secondaryBtn: '',
                  accentBtn: ''
                }}
              />
            )
          )
        })}
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
