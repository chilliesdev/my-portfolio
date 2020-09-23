import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import Section from '../styles/Section'

interface ProjectTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container margin="lg">
        <Hero background="home.jpg">{data.markdownRemark.frontmatter.title}</Hero>
        <Section>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Section>
      </Container>
    </Page>
  </IndexLayout>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
