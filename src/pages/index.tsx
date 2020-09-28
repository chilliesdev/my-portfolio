import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

// import { projects } from '../data'
import useRelativePath from '../hooks/useRelativePath'

interface Props {
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
        }
      }
    }[]
  }
}
const IndexPage = () => {
  const allProjects: Props = useStaticQuery(graphql`
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
            }
          }
        }
      }
    }
  `)

  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const maxFeature: number = allProjects.allMarkdownRemark.edges.length

  const nextFeature = () => {
    return setCurrentFeature(prevState => (prevState === maxFeature ? 0 : prevState + 1))
  }

  const opennedFeature = (id: number) => id === currentFeature && true

  const checkLastFeature = (id: number) => id === maxFeature && true
  return (
    <IndexLayout>
      <Page>
        <Featured onNext={nextFeature} open={opennedFeature(0)} />
        {allProjects.allMarkdownRemark.edges.map(({ node }) => {
          const { id, title, description, featured, image } = node.frontmatter

          return (
            featured && (
              <Featured
                key={id}
                onNext={nextFeature}
                open={opennedFeature(id)}
                details={{
                  heading: title,
                  body: description,
                  image: useRelativePath(image),
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
