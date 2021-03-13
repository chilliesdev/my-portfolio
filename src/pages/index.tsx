import React, { useState } from 'react'
import { featured } from '../data'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

import useRelativePath from '../hooks/useRelativePath'
import useAllProjects, { AllProjectsProps } from '../hooks/useAllProjects'

const IndexPage = () => {
  const featuredProjects: AllProjectsProps = useAllProjects(featured)

  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const [featureCount, setFeatureCount] = useState<number>(0)
  const maxFeature: number = featuredProjects.allMarkdownRemark.edges.length

  const nextFeature = () => {
    setFeatureCount(featureCount + 1)

    return setCurrentFeature(prevState => (featureCount === maxFeature ? 0 : featured[0 + featureCount]))
  }

  const opennedFeature = (id: number) => id === currentFeature && true

  const checkLastFeature = (id: number) => id === maxFeature && true
  return (
    <IndexLayout>
      <Page className="index-page">
        <Featured onNext={nextFeature} open={opennedFeature(0)} />
        {featuredProjects.allMarkdownRemark.edges.map(({ node }) => {
          const { id, title, description, image, slug } = node.frontmatter

          return (
            <Featured
              key={id}
              onNext={nextFeature}
              open={opennedFeature(id)}
              details={{
                heading: title,
                body: description,
                image: useRelativePath(image),
                arrowBtn: checkLastFeature(id) ? 'go to home' : 'next featured project',
                secondaryBtn: '/portfolio',
                accentBtn: `/${slug}`
              }}
            />
          )
        })}
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
