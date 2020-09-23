import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

import { projects } from '../data'

interface BackgroundProps {
  file: {
    id: string
  }
}

const IndexPage = () => {
  const projectOneBackground: BackgroundProps = useStaticQuery(graphql`
    query Background {
      file(base: { eq: "project-1.jpg" }) {
        id
      }
    }
  `)

  const projectTwoBackground: BackgroundProps = useStaticQuery(graphql`
    query Background {
      file(base: { eq: "project-2.jpg" }) {
        id
      }
    }
  `)

  const ProjectBackgroundRelativePath: {
    [key: string]: string
  } = {
    projectOne: projectOneBackground.file.id,
    projectTwo: projectTwoBackground.file.id
  }

  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const maxFeature: number = projects.length

  const nextFeature = () => {
    return setCurrentFeature(prevState => (prevState === maxFeature ? 0 : prevState + 1))
  }

  const opennedFeature = (id: number) => id === currentFeature && true

  const checkLastFeature = (id: number) => id === maxFeature && true

  const getProjectBackgroundImage = (name: string) => ProjectBackgroundRelativePath[name]

  return (
    <IndexLayout>
      <Page>
        <Featured onNext={nextFeature} open={opennedFeature(0)} />
        {projects.map(
          ({ id, name, description, featured, image }) =>
            featured && (
              <Featured
                key={id}
                onNext={nextFeature}
                open={opennedFeature(id)}
                details={{
                  heading: name,
                  body: description,
                  image: getProjectBackgroundImage(image),
                  arrowBtn: checkLastFeature(id) ? 'go to home' : 'next featured project',
                  secondaryBtn: '',
                  accentBtn: ''
                }}
              />
            )
        )}
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
