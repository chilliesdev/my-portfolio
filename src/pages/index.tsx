import React, { useState } from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

import { projects } from '../data/projects'

const IndexPage = () => {
  const [currentFeature, setCurrentFeature] = useState<number>(0)
  const maxFeature: number = projects.length
  console.log({ maxFeature })

  const nextFeature = () => {
    return setCurrentFeature(prevState => (prevState === maxFeature ? 0 : prevState + 1))
  }

  const opennedFeature = (id: number) => id === currentFeature && true

  const checkLastFeature = (id: number) => id === maxFeature && true

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
                  image,
                  // TODO add based on last featured
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
