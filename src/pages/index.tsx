import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import Featured from '../components/Featured'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Featured />
    </Page>
  </IndexLayout>
)

export default IndexPage
