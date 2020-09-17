import React, { useState } from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

import { projects } from '../data'

const IndexPage = () => {
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
